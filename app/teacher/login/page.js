"use client"
import Banner from "@/app/components/Banner";
import Link from "next/link";
import React, { useRef } from "react";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from "@/contexts/GlobalContext";
import { Toast } from 'primereact/toast';

const Login = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({ defaultValues: { role: 'teacher' } });
  const router = useRouter()
  const { key, setKey } = useGlobalContext();
  const toast = useRef(null);

  const onsubmit = async (data) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data)
      })

      const result = await response.json();
      console.log(result)
      if (response.ok) {
        reset()
        if (result.token) {

          window.localStorage.setItem('token', result.token)
          toast.current.show({ severity: 'success', summary: 'LogIn', detail: 'Login Successfull' });

          setTimeout(() => {
            router.push("/");
            setKey(Math.random())
          }, 900);
        } else {
          alert('Invalid Credentials !')
        }
        // window.location.reload();
      } else {
        // setCaptchaKey(Math.random())
        alert(result.error)
      }

    } catch (error) {
      console.log(error)
      alert('Something went wrong !')
      router.push('/teacher/login')

    }
  }



  return (
    <>
      <Toast ref={toast} />
      <Banner
        text={"Teacher's Log In"}
        title={"Log In"}
        href={"/teacher/login"}
      />
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        <div className="text-center mb-16">
          <div className="text-center mb-8">
            <div className="border-b-2 border-gray-300 mb-6 inline-block"></div>
            <h2 className="text-3xl font-bold mb-3">Log In</h2>
            <p className="text-lg mb-3">Log In to teachers account.</p>
            <p className="text-base">
              Dont't Have any Account ?{" "}
              <Link
                href={"/teacher/signup"}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <input type="hidden" {...register('role')} />
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              <input
                {...register('email', { required: "Email is required" })}
                name="email"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter email"
              />

            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
              <input
                {...register('password', { required: "Password is required" })}
                name="password"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
              />

            </div>
          </div>
          <div className="!mt-12">
            <button
              type="submit"
              className="w-full py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );

}
export default Login;
