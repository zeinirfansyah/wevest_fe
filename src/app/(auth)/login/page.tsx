"use client";

import { FormikHelpers } from "formik";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ILoginFormValues } from "./_types/login.types";
import LoginForm from "./_components/login-form";
import { useAuthStore } from "@/stores/auth-store";
import Image from "next/image";

const Login = () => {
  const { login, token } = useAuthStore((state) => state);

  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.replace("/");
    }
  }, [router, token]);

  const handleSubmit = async (
    values: ILoginFormValues,
    { setSubmitting }: FormikHelpers<ILoginFormValues>
  ) => {
    try {
      await login(values.username, values.password);
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col mx-auto items-center justify-center min-h-screen max-w-[80vw] lg:max-w-[60vw] ">
          <div
            className="flex flex-col lg:flex-row justify-center items-center border-2 w-full rounded-3xl bg-white"
          >
            <div className="w-full h-full lg:w-1/2">
              <Image
                src="/images/pagoda.jpg"
                alt="login"
                width={1000}
                height={1000}
                className="w-full max-h-[160px] lg:max-h-[70vh] object-cover rounded-t-3xl lg:rounded-3xl"
              />
            </div>
            <div className="w-full lg:w-1/2 h-full px-8 lg:px-12 py-12 lg:py-0">
              <div className="mb-8 lg:my-7 space-y-1">
                <h1 className="text-2xl font-semibold">Welcome Back!</h1>
                <p className="text-sm text-slate-400">
                  Don`t Miss Out! Login for Your Amazing Knowledge!
                </p>
              </div>
              <LoginForm handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
