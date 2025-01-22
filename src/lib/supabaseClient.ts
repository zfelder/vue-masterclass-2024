import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://jswpqtdlpaewdcimzmdw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impzd3BxdGRscGFld2RjaW16bWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NTI1OTksImV4cCI6MjA1MzEyODU5OX0.M4p5OSP8jcuUFVUEOdANi8y91lLzuPy6-htO52SL8ww',
)
