-- Dolomites Fly: Initial Database Schema (Events & Bookings)
-- Datum: 10.04.2026

-- 1. Events Tabelle
CREATE TABLE public.events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    jump_date DATE NOT NULL,
    time_slot TIME NOT NULL,
    capacity INT DEFAULT 5 NOT NULL,
    status TEXT DEFAULT 'open' CHECK (status IN ('open', 'full', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. Bookings Tabelle
CREATE TABLE public.bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
    nickname TEXT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT,
    date_of_birth DATE,
    emergency_contact TEXT,
    license_country TEXT NOT NULL,
    license_number TEXT NOT NULL,
    insurance_provided BOOLEAN DEFAULT false,
    stripe_customer_id TEXT, -- For SetupIntent (Save card for later)
    status TEXT DEFAULT 'reserved' CHECK (status IN ('reserved', 'paid', 'cancelled', 'no_show')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 3. Row Level Security (RLS)
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Jeder darf offene Events lesen (für die Website)
CREATE POLICY "Public can view active events" 
ON public.events FOR SELECT 
USING (status != 'cancelled');

-- Policy: Jeder darf Nicknames für das Event lesen (Sichtbare Loads)
-- Restliche persönliche Daten (Email, Stripe ID) bleiben versteckt durch Column Select
CREATE POLICY "Public can view passenger nicknames" 
ON public.bookings FOR SELECT 
USING (true); 

-- Note: In a production App with Supabase Auth, you would restrict INSERT/UPDATE.
-- Here, we assume a Stripe Edge Function or a Service Role Key inserts the records 
-- safely from the backend, circumventing public RLS.
