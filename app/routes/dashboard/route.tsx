import {
    Outlet,
} from "@remix-run/react";
// import dashboardPageStyles from '../../styles/dashboard-page.css';
import { redirect, type LoaderFunction, type LoaderFunctionArgs } from "@remix-run/node";
import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'

// export const links = () => [
//   { rel: "stylesheet", href: dashboardPageStyles },
// ];

export const meta = () => {
  return [{
    title: "Dashboard CMS",
  }, {
    property: "robots",
    content: "noindex",
  }];
};

export const loader: LoaderFunction = async ({
    request
}: LoaderFunctionArgs) => {
  const headers = new Headers()

  const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '')
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
        )
      },
    },
  })

  const userResponse = await supabase.auth.getUser();

  if (!userResponse?.data?.user) { 
    return redirect("/login");
  }

  return {}

//   return new Response('...', {
//     headers,
//   })
}


export default function DashboardLayout() {
    return (
      <>
        <div>
         <main id='main-content'>
            <div className={`container`}>
              <div className={`relative mt-10 mb-14 bg-white dark:bg-gray-800 shadow-3xl rounded-lg p-4`}>
                  <Outlet />
              </div>
            </div>
          </main>
        </div>
        <footer className={`text-center pb-3`}>
          Made With <a href="https://remix.run" target="_blank"><u>Remix Run</u></a>
        </footer>
      </>
    )
}