// import { createError } from 'h3'
import { supabaseClient } from '../supabase.connection'

export async function getClassType(name: string) {
    const { data, error } = await supabaseClient().from('classTypes')
    .select().eq('name', name).maybeSingle()
    // console.log('data', data)
    // console.log('error', error)
    if (error) {
      throw error;
    }
  
    return data
  }