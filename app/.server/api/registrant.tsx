// import { createError } from 'h3'
import { supabaseClient } from '../supabase.connection'

export async function addNewRegistrant({
    name,
    phone,
    kelas_type,
    category
}) {
    const { data, error } = await supabaseClient().from('registrants')
    .insert({
      name: name,
      phone: phone,
      kelas_type: kelas_type,
      category: category,
    })
    console.log(data)
    console.log(error)
    if (error) {
      throw error;
    }
  
    return data
  }