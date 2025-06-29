// import { createError } from 'h3'
import { supabaseClient } from '../supabase.connection'
// import { sendMessage } from '../services/whatsapp-queue'
import { sendWhatsappNotification } from '../services/whatsapp'

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
    // console.log(data)
    // console.log(error)
    if (error) {
      throw error;
    }
    try {
      let phoneNumber = phone
      if (phone.startsWith("0")) {
        phoneNumber = phone.replace(/^0/, "62");
      }

      // console.log('send message wa', {
      //   phone: phoneNumber,
      //   content: `Assalamualaikum *${name}*,` +
      //   "\n\n" +
      //   `Data anda telah masuk dan insya Allah akan kami hubungi untuk tes seleksi yang insya Allah yang akan dilaksanakan pada *Juli 2025* untuk tanggal dan waktu akan segera saya beritahu kembali.` +
      //   "\n\n" +
      //   `Jika masih ada pertanyaan silahkan hubungi kami\n*Reza Daulay: 0812-1000-2964*`
      // })

      sendWhatsappNotification({
        phone: phoneNumber,
        content: `Assalamualaikum *${name}*,` +
        "\n\n" +
        `Data anda telah masuk dan insya Allah akan kami hubungi kembalu untuk tes seleksi.` +
        "\n\n" +
        `Jika masih ada pertanyaan silahkan hubungi kami\n*Reza Daulay: 0812-1000-2964*`
      });
    } catch (error) {
      console.log(error);
    }
  
    return data
  }


  export async function getRegistrant(phone: string) {
    const { data, error } = await supabaseClient().from('registrans')
    .select().eq('phone', phone).maybeSingle()
    if (error) {
      throw error;
    }
  
    return data
  }