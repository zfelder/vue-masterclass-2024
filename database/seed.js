/* eslint-env node */

import dotenv from 'dotenv'
import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Load environment variables
dotenv.config()

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_KEY)

// Add a simple seed function to use faker (resolving the unused import warning)
async function seedDatabase() {
  console.log(supabase)
}

seedDatabase().catch(console.error)
