-- Migration: Add location/price columns to events table
-- Run this manually in the Supabase SQL Editor (Dashboard → SQL → New Query)
-- Date: 2026-04-22

ALTER TABLE public.events 
  ADD COLUMN IF NOT EXISTS jump_location TEXT DEFAULT 'Saslong UNESCO Jump',
  ADD COLUMN IF NOT EXISTS altitude_m INT DEFAULT 1600,
  ADD COLUMN IF NOT EXISTS price_per_load INT DEFAULT 775;

-- Insert sample events for testing (remove or adjust dates as needed)
INSERT INTO public.events (jump_date, time_slot, capacity, status, jump_location, altitude_m, price_per_load) VALUES
  ('2026-05-03', '09:00', 5, 'open', 'Saslong UNESCO Jump', 1600, 775),
  ('2026-05-10', '09:00', 5, 'open', 'Mulin da Coi Jump', 2500, 825);
