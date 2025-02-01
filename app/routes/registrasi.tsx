import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import type { MetaFunction } from "@remix-run/node";
import { useLocation } from 'react-router-dom';

export const meta: MetaFunction = () => {
  return [
    { title: "Form Registasi Peserta Kelas Masjid Al Muwahhidin" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

// Schema untuk validasi menggunakan Zod
const registrationSchema = z.object({
  kelas: z.enum(['tahfizh'], { errorMap: () => ({ message: 'Kelas tidak valid' }) }),
  nama: z.string().min(1, { message: 'Nama tidak boleh kosong' }),
  noWhatsapp: z.string().min(1, { message: 'No Whatsapp tidak boleh kosong' }).regex(/^\d{10,15}$/, { message: 'No Whatsapp tidak valid' }),
  kategori: z.enum(['Anak-anak', 'Dewasa'], { errorMap: () => ({ message: 'Kategori tidak valid' }) }),
  centang: z.literal(true, { errorMap: () => ({ message: 'Harus mencentang persetujuan' }) })
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Mengambil query parameter program dari URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const programFromUrl = (searchParams.get('program') || 'tahfizh') as 'tahfizh'; // Menetapkan tipe 'tahfizh'  

  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      kelas: programFromUrl, // Menetapkan nilai default kelas berdasarkan parameter URL
    }
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    try {
      // Simulasi pengiriman data ke server
      const response = await fetch('/api/registrasi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSuccessMessage('Registrasi berhasil!');
      } else {
        setErrorMessage('Terjadi kesalahan, silakan coba lagi.');
      }
      setIsSubmitting(false);
    } catch (error) {
      setErrorMessage('Terjadi kesalahan, silakan coba lagi.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg my-7">
      <h2 className="text-2xl font-semibold text-primary mb-4">Form Registrasi</h2>

      {successMessage && <div className='bg-green-600 p-2 text-sm rounded-lg text-white mb-4'>
        Registrasi Berhasil, untuk info selanjutnya harap menunggu anda akan dihubungi oleh admin kami.
      </div>}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      {!successMessage && 
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Kelas */}
        <div>
          <label htmlFor="kelas" className="block text-gray-700">Kelas:</label>
          <select {...register('kelas')} id="kelas" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            <option value="tahfizh">Kelas Tahsin & Tahfizh</option>
          </select>
          {errors.kelas && <p className="text-red-500 text-sm">{errors.kelas.message}</p>}
        </div>

        {/* Nama */}
        <div>
          <label htmlFor="nama" className="block text-gray-700">Nama:</label>
          <input id="nama" {...register('nama')} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
          {errors.nama && <p className="text-red-500 text-sm">{errors.nama.message}</p>}
        </div>

        {/* No Whatsapp */}
        <div>
          <label htmlFor="noWhatsapp" className="block text-gray-700">No Whatsapp:</label>
          <input id="noWhatsapp" {...register('noWhatsapp')} type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
          {errors.noWhatsapp && <p className="text-red-500 text-sm">{errors.noWhatsapp.message}</p>}
        </div>

        {/* Kategori */}
        <div>
          <label htmlFor="kategori" className="block text-gray-700">Kategori:</label>
          <select {...register('kategori')} id="kategori" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            <option value="">Pilih salah satu</option>
            <option value="Anak-anak">Anak-anak</option>
            <option value="Dewasa">Dewasa</option>
          </select>
          {errors.kategori && <p className="text-red-500 text-sm">{errors.kategori.message}</p>}
        </div>

        {/* Centang Persetujuan */}
        <div>
          <label className="flex items-center text-gray-700">
            <input type="checkbox" {...register('centang')} className="mr-2" />
            <span className="text-sm leading-tight	">Saya akan serius mengikuti program ini dan bersedia mengikuti segala peraturan.</span>
          </label>
          {errors.centang && <p className="text-red-500 text-sm">{errors.centang.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          { !isSubmitting ? (
            <button type="submit" className="w-full py-2 bg-primary text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <i className="fa-solid fa-paper-plane"></i> Registrasi
            </button>
          ) : (
            <button type="submit" disabled className="w-full opacity-70 py-2 bg-primary text-white rounded-lg">
                <i className="fa-solid fa-paper-plane"></i> Proses ...
            </button>
          )}
        </div>
      </form>}
    </div>
  );
};

export default RegistrationForm;
