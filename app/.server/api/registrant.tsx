// import { createError } from 'h3'
import { supabaseClient } from '../supabase.connection'

type registrant = {
  name: string,
  phone: string,
  kelas_type: string,
  kategori_type: string
}

export async function addNewRegistrant({
  name,
  phone,
  kelas_type,
  kategori_type
}: registrant) {
    const { data, error } = await supabaseClient().from('registrants')
    .insert({
      name: name,
      phone: phone,
      kelas_type: kelas_type,
      kategori_type: kategori_type,
    })
    console.log(data)
    console.log(error)
    if (error) {
      throw error;
    }
  
    return data
  }