import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Kelas Masjid Al Muwahhidin" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <header className="text-white py-10 text-center relative">
      <div className="z-20 relative">
        <img src="./images/logo-masjid.png" alt="Logo Masjid" className="mx-auto h-24 mb-4"/>
        <h1 className="text-3xl font-bold">Kelas Masjid Al Muwahhidin</h1>
        <p className="mt-2">Raih Keberkahan dengan Al-Qur’an!</p>
        <h2 className="text-xl font-semibold text-center text-gray-700">"Sebaik-baik kalian adalah yang belajar Al-Qur’an dan mengajarkannya." (HR. Bukhari)</h2>
      </div>
      <div className="bg-primary absolute w-full h-full top-0 left-0 z-0"></div>
      <div className="bg-image-header absolute w-full h-full top-0 left-0 z-10 opacity-40"></div>
    </header>
    </>
  );
}
