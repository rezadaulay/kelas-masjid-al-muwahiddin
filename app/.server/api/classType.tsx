// import { createError } from 'h3'
import { supabaseClient } from '../supabase.connection'

export async function getClassType(name: string) {
  const { data, error } = await supabaseClient().from('classTypes')
  .select().eq('name', name).maybeSingle()
  if (error) {
    throw error;
  }

  return data
}

export async function getActiveClassType() {
  const { data, error } = await supabaseClient().from('classTypes')
  .select().eq('closed', false)
  if (error) {
    throw error;
  }

  return data
}