import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ttednlxkwqnibfulrxdu.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0ZWRubHhrd3FuaWJmdWxyeGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3OTUwMjgsImV4cCI6MjAxMTM3MTAyOH0.Gehx6-NO2RCbb4T0nhTXODLCkJP8NxX6Y7AFiWbYflk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
