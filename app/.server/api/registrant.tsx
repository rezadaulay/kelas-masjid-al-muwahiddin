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
      sendWhatsappNotification({
        phone: phone,
        content: `Assalamualaikum *${name}*,` +
        "\n\n" +
        `Data anda telah masuk dan insya Allah akan kami hubungi untuk tes seleksi yang insya Allah yang akan dilaksanakan pada tanggal *25 Shaʻban 1446H/24 Februari 2025*` +
        "\n\n" +
        `Jika masih ada pertanyaan silahkan hubungi kami\n*Reza Daulay: 0812-1000-2964* atau *Yanda Basu: 0813-7519-9058*`
      });
    } catch (error) {
      console.log(error);
    }
  
    return data
  }