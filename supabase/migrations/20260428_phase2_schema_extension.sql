-- ================================================================
-- Phase 2: Schema Extension — TimeToJump Dolomites
-- Based on stakeholder call 27.04.2026 with David Prato
-- Applied: 2026-04-28
-- ================================================================

-- 1. LOCATIONS TABLE — Multi-Standort Support
CREATE TABLE public.locations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    short_name TEXT NOT NULL,
    altitude_m INT NOT NULL DEFAULT 1600,
    coordinates_lat NUMERIC(10,7),
    coordinates_lng NUMERIC(10,7),
    description TEXT,
    google_maps_embed TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view active locations"
  ON public.locations FOR SELECT USING (is_active = true);

-- 2. EVENTS — Extend with load management + location FK
ALTER TABLE public.events
  ADD COLUMN IF NOT EXISTS location_id UUID REFERENCES public.locations(id),
  ADD COLUMN IF NOT EXISTS load_number INT DEFAULT 1,
  ADD COLUMN IF NOT EXISTS parent_event_id UUID REFERENCES public.events(id),
  ADD COLUMN IF NOT EXISTS max_loads_per_day INT DEFAULT 2,
  ADD COLUMN IF NOT EXISTS notes TEXT;

CREATE INDEX IF NOT EXISTS idx_events_date_location
  ON public.events (jump_date, location_id, load_number);

-- 3. BOOKINGS — Extend with group booking + financials
ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS birth_place TEXT,
  ADD COLUMN IF NOT EXISTS group_leader_id UUID REFERENCES public.bookings(id),
  ADD COLUMN IF NOT EXISTS is_group_leader BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS group_size INT DEFAULT 1,
  ADD COLUMN IF NOT EXISTS deposit_amount_cents INT,
  ADD COLUMN IF NOT EXISTS total_amount_cents INT,
  ADD COLUMN IF NOT EXISTS cancellation_fee_pct INT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS cancelled_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS stripe_setup_intent_id TEXT,
  ADD COLUMN IF NOT EXISTS stripe_payment_intent_id TEXT,
  ADD COLUMN IF NOT EXISTS payment_method TEXT CHECK (payment_method IN ('card', 'cash', 'transfer')),
  ADD COLUMN IF NOT EXISTS paid_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS is_short_notice BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS invite_token TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS invited_by UUID REFERENCES public.bookings(id);

CREATE INDEX IF NOT EXISTS idx_bookings_group_leader
  ON public.bookings (group_leader_id) WHERE group_leader_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_bookings_invite_token
  ON public.bookings (invite_token) WHERE invite_token IS NOT NULL;

-- 4. CANCELLATIONS TABLE
CREATE TABLE public.cancellations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    booking_id UUID REFERENCES public.bookings(id) ON DELETE CASCADE NOT NULL,
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
    reason TEXT,
    fee_percentage INT NOT NULL,
    fee_amount_cents INT,
    refund_amount_cents INT,
    processed_at TIMESTAMPTZ DEFAULT now(),
    processed_by TEXT DEFAULT 'system'
);

ALTER TABLE public.cancellations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role only" ON public.cancellations FOR ALL USING (false);

-- 5. PRICING RULES TABLE
CREATE TABLE public.pricing_rules (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    location_id UUID REFERENCES public.locations(id),
    price_per_load_cents INT NOT NULL,
    valid_from DATE NOT NULL DEFAULT CURRENT_DATE,
    valid_until DATE,
    season_label TEXT DEFAULT '2026',
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.pricing_rules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view active pricing"
  ON public.pricing_rules FOR SELECT
  USING (valid_from <= CURRENT_DATE AND (valid_until IS NULL OR valid_until >= CURRENT_DATE));

-- 6. VIEW: events_enriched (SECURITY INVOKER)
CREATE VIEW public.events_enriched WITH (security_invoker = true) AS
SELECT
  e.id, e.jump_date, e.time_slot, e.capacity, e.status,
  e.jump_location, e.altitude_m, e.price_per_load,
  e.location_id, e.load_number, e.parent_event_id, e.notes,
  l.name AS location_name, l.short_name AS location_short_name,
  l.coordinates_lat, l.coordinates_lng,
  COALESCE((SELECT COUNT(*) FROM public.bookings b WHERE b.event_id = e.id AND b.status != 'cancelled'), 0)::INT AS booked_count,
  CASE
    WHEN (SELECT COUNT(*) FROM public.bookings b WHERE b.event_id = e.id AND b.status != 'cancelled') >= e.capacity THEN 'full'
    WHEN (SELECT COUNT(*) FROM public.bookings b WHERE b.event_id = e.id AND b.status != 'cancelled') >= CEIL(e.capacity::NUMERIC / 2) THEN 'filling'
    WHEN (SELECT COUNT(*) FROM public.bookings b WHERE b.event_id = e.id AND b.status != 'cancelled') > 0 THEN 'booking_open'
    ELSE 'new'
  END AS availability_status,
  CASE
    WHEN (SELECT COUNT(*) FROM public.bookings b WHERE b.event_id = e.id AND b.status != 'cancelled') = 0 THEN e.price_per_load
    ELSE CEIL(e.price_per_load::NUMERIC / GREATEST(1, (SELECT COUNT(*) FROM public.bookings b WHERE b.event_id = e.id AND b.status != 'cancelled')))
  END::INT AS current_price_per_person,
  (e.jump_date - CURRENT_DATE < 7) AS is_short_notice
FROM public.events e
LEFT JOIN public.locations l ON e.location_id = l.id
WHERE e.status != 'cancelled';

GRANT SELECT ON public.events_enriched TO anon, authenticated;

-- 7. FUNCTION: calc_cancellation_fee
CREATE OR REPLACE FUNCTION public.calc_cancellation_fee(
  p_event_date DATE, p_price_per_load INT, p_booked_count INT
) RETURNS TABLE(fee_pct INT, fee_amount_cents INT, refund_amount_cents INT)
LANGUAGE plpgsql SET search_path = public AS $$
DECLARE days_until INT; deposit INT;
BEGIN
  days_until := p_event_date - CURRENT_DATE;
  deposit := CEIL(p_price_per_load::NUMERIC / GREATEST(1, p_booked_count));
  IF days_until < 7 THEN
    fee_pct := 100; fee_amount_cents := deposit * 100; refund_amount_cents := 0;
  ELSE
    fee_pct := 30; fee_amount_cents := CEIL(deposit * 30);
    refund_amount_cents := deposit * 100 - fee_amount_cents;
  END IF;
  RETURN NEXT;
END; $$;
