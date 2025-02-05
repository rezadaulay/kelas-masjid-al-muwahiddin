import { useForm } from 'react-hook-form';
import { Form, redirect, useLoaderData, useSubmit } from "@remix-run/react";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { createServerClient, createBrowserClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'
import { useState } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "Silahkan Login" }, {
      property: "robots",
      content: "noindex",
    }
  ];
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

  if (userResponse?.data?.user) { 
    return redirect("/dashboard");
  }

  return {
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL!,
      SUPABASE_KEY: process.env.SUPABASE_KEY!,
    },
  };
}

export async function action({
  request
}: ActionFunctionArgs) {
  // console.log('request.headers', request.headers)
  const headers = new Headers()
  createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!, {
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
  return redirect("/dashboard");
};


// Schema untuk validasi menggunakan Zod
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Password tidak boleh kosong' })
});

type LoginFormData = z.infer<typeof loginSchema>;


const LoginForm = () => {
  const submit = useSubmit();
  const { env } = useLoaderData<typeof loader>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async () => {
    setErrorMessage('');
    setIsSubmitting(true);

    const supabase = createBrowserClient(env.SUPABASE_URL, env.SUPABASE_KEY);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: getValues('email'),
      password: getValues('password'),
    });

    if (error) {
      setIsSubmitting(false);
      // console.log(error);
      setErrorMessage('Email/Password salah');
      return;
    }
    submit({}, { method: "post" });

    // if (data.session) {
    //   console.log(data.session);
    //   redirect("/dashboard");
    // }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg my-7 ">
      <h2 className="text-2xl font-semibold text-primary mb-4">Login</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nama */}
        <div>
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input id="email" {...register('email')} type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input id="password" {...register('password')} type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          { isSubmitting ? (
            <button type="submit" disabled className="w-full opacity-70 py-2 bg-primary text-white rounded-lg">
                <i className="fa-solid fa-paper-plane"></i> Proses ...
            </button>
          ) : (
            <button type="submit" className="w-full py-2 bg-primary text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Login
            </button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
