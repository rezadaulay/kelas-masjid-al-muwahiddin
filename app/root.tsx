import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "./output.css?url";
import "animate.css/animate.compat.css"
// import animate from "./animate.min.css?url";

export const links: LinksFunction = () => [
  // { rel: "stylesheet", href: animate },
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100">
        <Outlet />
        <footer className="bg-primary text-white py-6 text-center">
          {/* <p>BKM Masjid Al Muwahhidin | Jl. SMTK, Lingkungan VIII Kelurahan P.B. Selayang </p> */}
          <p className="mt-0">© { (new Date()).getFullYear() } Masjid Al Muwahhidin. Hak Cipta Dilindungi.</p>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <script src="https://kit.fontawesome.com/2be881f0a9.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
