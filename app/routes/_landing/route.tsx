import {
    // Link,
    Outlet
  } from "@remix-run/react";
// import landingPageStyles from '../../styles/landing-page.css';

// export const links = () => [
//     { rel: "stylesheet", href: landingPageStyles },
// ];

export default function LandingPageLayout() {
    return (
      <>
        <Outlet />
        <footer className="bg-primary text-white py-6 text-center">
            {/* <p>BKM Masjid Al Muwahhidin | Jl. SMTK, Lingkungan VIII Kelurahan P.B. Selayang </p> */}
            <p className="mt-0">© { (new Date()).getFullYear() } Masjid Al Muwahhidin. Hak Cipta Dilindungi.</p>
        </footer>
      </>
    )
}