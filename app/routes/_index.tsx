import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useEffect } from "react";
import { onPageView } from "../.client/services/google-analytics";

export const meta: MetaFunction = () => {
  return [
    { title: "Kelas Masjid Al Muwahhidin" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  useEffect(() => {
    onPageView({
      page: '/',
      title: 'Homepage'
    })
    return () => {
    }
  }, []);

  return (
    <>
    <header className="text-white py-10 text-center relative">
      <div className="z-20 relative">
        <img src="./images/logo-masjid.png" alt="Logo Masjid" className="mx-auto h-24 mb-4"/>
        <h1 className="text-3xl font-bold">Kelas Masjid Al Muwahhidin</h1>
        <div className="max-w-4xl mx-auto">
          <p className="mt-2 text-xl px-2 md:px-0">Harapan kami masjid ini tidak hanya menjadi tempat sholat, tetapi juga pusat pengembangan peradaban islam, salah satunya dengan menjadikan mesjid tempat pendidikan.</p>
        </div>
        {/* <h2 className="text-xl font-semibold text-center text-gray-700">"Sebaik-baik kalian adalah yang belajar Al-Qur’an dan mengajarkannya." (HR. Bukhari)</h2> */}
      </div>
      <div className="bg-primary absolute w-full h-full top-0 left-0 z-0"></div>
      <div className="bg-image-header homepage absolute w-full h-full top-0 left-0 z-10 opacity-40"></div>
    </header>
    
    <section className="bg-white py-6">
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* looping */}
          <Link
            to="/tahfizh"
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src="/images/semangat-membaca-al-quran-4.jpeg"
              alt="Kelas Tahsin & Tahfizh"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003e1e] via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
              Kelas Tahsin & Tahfizh
            </div>
          </Link>
          {/* looping */}
        </div>
      </div>
    </section>
    </>
  );
}
