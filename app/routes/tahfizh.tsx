import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import FadeInElement from '../components/fadeInElement';
import { Link, json, useLoaderData } from "@remix-run/react";
import { getClassType } from '../.server/api/classType';
// import ScrollAnimation from 'react-animate-on-scroll';

export const meta: MetaFunction = () => {
  return [
    { title: "Kelas Tahsin & Tahfizh - Masjid Al Muwahhidin" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const classType = await getClassType('tahfizh');
  return json(
      { classType },
  );
};


export default function TahfizhPage() {
  const data = useLoaderData<typeof loader>();

  // console.log('data ok:', data)

  return (
    <>
    <header className="text-white py-10 text-center relative">
      <div className="z-20 relative px-6 md:px-0">
        <FadeInElement>
          <img src="./images/logo-masjid.png" alt="Logo Masjid" className="mx-auto h-24 mb-4"/>
          <h1 className="text-3xl font-bold">Kelas Tahsin & Tahfizh Masjid Al Muwahhidin</h1>
          <p className="mt-2">Raih Keberkahan dengan Al-Qur’an!</p>
          <h2 className="text-xl font-semibold text-center text-gray-700">"Sebaik-baik kalian adalah yang belajar Al-Qur’an dan mengajarkannya." (HR. Bukhari)</h2>
        </FadeInElement>
      </div>
      <div className="bg-primary absolute w-full h-full top-0 left-0 z-0"></div>
      <div className="bg-image-header tahfizh absolute w-full h-full top-0 left-0 z-10 opacity-40"></div>
    </header>
    
    <section className="bg-white py-6">
      <div className="max-w-4xl mx-auto p-6">
        <FadeInElement delay={500}>
          <h2 className="text-2xl font-bold text-center text-gray-700">Metode Pembelajaran</h2>
          <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex items-center"><i className="fas fa-book-reader text-green-600 mr-3"></i> Talaqqi – Belajar langsung dengan guru untuk memperbaiki bacaan</li>
              <li className="flex items-center"><i className="fas fa-sync-alt text-green-600 mr-3"></i> Murajaah – Repetisi hafalan agar semakin kuat</li>
              <li className="flex items-center"><i className="fas fa-clipboard-check text-green-600 mr-3"></i> Evaluasi Berkala – Setiap 2 bulan untuk menilai perkembangan</li>
          </ul>
        </FadeInElement>
      </div>
    </section>
    
    {/* <section className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-center text-gray-700">🌟 "Sebaik-baik kalian adalah yang belajar Al-Qur’an dan mengajarkannya." (HR. Bukhari)</h2>
    </section> */}
    
    <section className="max-w-5xl mx-auto py-7 pb-10">
      <FadeInElement>
        <h2 className="text-2xl font-bold text-center text-gray-700">Mengapa Harus Bergabung?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6 md:px-0">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <i className="fas fa-user-graduate text-4xl text-green-600"></i>
                <h3 className="font-semibold sm:text-lg md:text-sm mt-4">Bimbingan Ustadz Bersanad</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <i className="fas fa-book-open text-4xl text-green-600"></i>
                <h3 className="font-semibold sm:text-lg md:text-sm mt-4">Metode Talaqqi & Murajaah</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <i className="fas fa-calendar-alt text-4xl text-green-600"></i>
                <h3 className="font-semibold sm:text-lg md:text-sm mt-4">Program 1 Tahun</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <i className="fas fa-users text-4xl text-green-600"></i>
                <h3 className="font-semibold sm:text-lg md:text-sm mt-4">Tersedia Kelas Anak-Anak & Dewasa</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <i className="fas fa-certificate text-4xl text-green-600"></i>
                <h3 className="font-semibold sm:text-lg md:text-sm mt-4">Mendapat Sertifikat Kelulusan</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <i className="fas fa-wallet text-4xl text-green-600"></i>
                <h3 className="font-semibold sm:text-lg md:text-sm mt-4">Gratis</h3>
            </div>
        </div>
      </FadeInElement>
    </section>
    
    <section className="bg-white py-6">
      <FadeInElement>
      <div className="max-w-5xl mx-auto mt-10 px-6 md:px-0">
          <h2 className="text-2xl font-bold text-center text-gray-700">Para Pengajar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="p-6 bg-white shadow-lg rounded-lg text-center border border-light-gray">
                  <h3 className="font-semibold text-lg">Ustadz Muhamad Yusuf, Lc, MH</h3>
                  <p className="text-gray-600">Pemegang Sanad Hafs ‘An ‘Ashim ke-30 Jalur Asy-Syathibiyyah</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center border border-light-gray">
                  <h3 className="font-semibold text-lg">Ustadz Ardiyan Safi'i, S.Pd</h3>
                  <p className="text-gray-600">Pemegang Sanad Hafs & Warsy ‘An ‘Ashim ke-29 Jalur Asy-Syathibiyyah</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg text-cente border border-light-gray">
                  <h3 className="font-semibold text-lg">Ustadz Muhammad Shahidan Abdi Lubis, S.Pd.I</h3>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center border border-light-gray">
                  <h3 className="font-semibold text-lg">Akh Rifai Fando</h3>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center border border-light-gray">
                  <h3 className="font-semibold text-lg">Akh Aji Ramadhan</h3>
              </div>
          </div>
      </div>
      </FadeInElement>
    </section>
    
    <section className="py-6">
      <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Target</h2>
          <FadeInElement>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
              <div className="bg-white shadow-lg rounded-lg text-center ">
                  <img src="/images/semangat-membaca-al-quran.jpeg" className="rounded-t-lg" alt="" />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">Kelas Tahsin</h3>
                    <p className="text-sm">Mahir Membaca Al-Qur’an</p>
                    <p className="text-gray-600">Mampu membaca Al-Qur’an dengan benar sesuai tajwid.</p>
                  </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg text-center ">
                  <img src="/images/semangat-membaca-al-quran-5.jpeg" className="rounded-t-lg" alt="" />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">Kelas Tahfizh</h3>
                    <p className="text-sm">Hafal 3 Juz</p>
                    <p className="text-gray-600">Hafal Juz 30, 29, & 28 secara mutqin.</p>
                  </div>
              </div>
          </div>
          </FadeInElement>
      </div>
    </section>
    
    <section className="py-6 bg-white">
      <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Pembagian Kelas & Jadwal</h2>
          <FadeInElement>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
              <div className="bg-white shadow-lg rounded-lg text-center ">
                  <img src="/images/semangat-membaca-al-quran-6.jpeg" className="rounded-t-lg" alt="" />
                  <div className="p-6">
                  <h3 className="font-semibold text-lg">Kelas Anak-anak (10-15 tahun)</h3>
                  <p className="text-gray-600">Senin, Selasa, Kamis<br/>Ba’da Ashar - 18.00 WIB</p>
                  </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg text-center ">
                  <img src="/images/semangat-membaca-al-quran-7.jpeg" className="rounded-t-lg" alt="" />
                  <div className="p-6">
                  <h3 className="font-semibold text-lg">Kelas Dewasa (16+ tahun)</h3>
                  <p className="text-gray-600">Ahad, Senin, Rabu, Kamis<br/>Ba’da Maghrib - 21.00 WIB</p>
                  </div>
              </div>
          </div>
          </FadeInElement>
      </div>
    </section>
    
    
    <section className=" py-12">
      <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-700">Proses Pendaftaran</h2>
          <div className="flex items-center justify-center step-container relative mt-6 process-registration-row">
            <div className="process-registration-line"></div>
            <div className="w-1/3 text-center relative process-registration-col">
              <div className="z-10 relative">
                <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto">1</div>
                <p className="mt-2 text-gray-600 font-semibold">Pendaftaran</p>
                <p className="mt-0 text-gray-600">3-22 Feb 2025</p>
                {/* <div className="step-connector md:block hidden"></div> */}
              </div>
            </div>
            <div className="w-1/3 text-center relative mt-5 md:mt-0 process-registration-col">
              <div className="z-10 relative">
                <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto">2</div>
                <p className="mt-2 text-gray-600 font-semibold">Seleksi</p>
                <p className="mt-0 text-gray-600">24 Feb 2025</p>
                {/* <div className="step-connector md:block hidden"></div> */}
              </div>
            </div>
            <div className="w-1/3 text-center relative mt-5 md:mt-0 process-registration-col">
              <div className="z-10 relative">
                <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto">3</div>
                <p className="mt-2 text-gray-600 font-semibold">Mulai Belajar</p>
                <p className="mt-0 text-gray-600">14 Apr 2025</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            { !data.classType?.closed ? (
              <Link to="/registrasi?program=tahfizh" className="bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-lg text-xl font-bold"><i className="fa-solid fa-hand-point-right"></i> Daftar Sekarang</Link>
            ) : (
              <button disabled className="bg-primary opacity-50 text-white px-6 py-2 rounded-lg text-xl font-bold">Pendaftaran Ditutup</button>
            )}
          </div>
      </div>


      <div className="px-6 md:px-0">
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
            {/* <h2 className="text-2xl font-bold text-gray-700">Kontak Person untuk Pertanyaan</h2> */}
            <p className="mt-2 text-gray-600">Jika Anda memiliki pertanyaan atau ingin informasi lebih lanjut, silakan hubungi kami melalui WhatsApp:</p>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-center">
                    <a href="https://wa.me/6281210002964" target="_blank" className="flex items-center bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600">
                        <i className="fab fa-whatsapp text-2xl mr-3"></i>
                        <span className="text-sm">Reza Daulay: 0812-1000-2964</span>
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a href="https://wa.me/6281375199058" target="_blank" className="flex items-center bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600">
                        <i className="fab fa-whatsapp text-2xl mr-3"></i>
                        <span className="text-sm">Yanda Basu: 0813-7519-9058</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
    
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        <h2 className="text-2xl font-bold text-gray-700">Dukung Program Ini dengan Donasi!</h2>
          <p className="mt-2 text-gray-600">Setiap ayat yang mereka baca, setiap hafalan yang mereka simpan dalam hati, pahala mengalir untuk Anda!</p>
          <p className="mt-4 text-gray-600">Program Kelas Tahsin & Tahfizh ini adalah ikhtiar untuk mencetak generasi yang cinta Al-Qur’an. Agar terus berjalan dan semakin banyak yang bisa belajar, kami mengajak Anda untuk turut berkontribusi dalam kebaikan ini.</p>
          <ul className="mt-4 text-gray-600 list-none	">
              <li>✔️ Biaya operasional program belajar</li>
              <li>✔️ Pengadaan modul belajar</li>
              <li>✔️ Hadiah para pengajar</li>
          </ul>
          {/* <p className="mt-4 italic">"Alhamdulillah, setelah ikut kelas ini, saya bisa membaca Al-Qur’an dengan lebih baik dan lancar. Hafalan saya juga bertambah, dan saya merasa lebih dekat dengan Allah." – Ahmad, Peserta Kelas Dewasa</p> */}
          <p className="mt-4 text-gray-600 font-semibold">✨ Dukung program ini dan raih pahala jariyah yang tak terputus! ✨</p>
          <p className="mt-4 text-gray-600 font-semibold">🔗 Transfer Donasi:<br/>🏦 BCA Syariah - 069.666.0000 a/n BKM Masjid Al-Muwahhidin<br/>📩 Konfirmasi Donasi WA: 0813-7002-0951 (Bapak Teuku Odi)</p>
          {/* <div className="mt-4">
              <a href="#" className="bg-yellow-500 text-white px-6 py-2 rounded-lg text-lg font-bold">💰 Donasi Sekarang</a>
          </div> */}
      </div>
    </section>
    </>
  );
}
