"use client";
import React, { useState } from "react";
import { RegisterForm } from "./_components/register-form";
import { IRegisterType } from "./_components/form-model/register.types";
import { register } from "@/services/auth-api";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const route = useRouter()

  const handleSubmit = async (values: IRegisterType) => {
    setIsSubmitting(true);
    setMessage(null);
    try {
      await register(values);
      route.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An error occurred.";
        setMessage(errorMessage);
      } else {
        setMessage("An error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-8 flexflex-col lg:flex-row gap-4">
            <div className="flex flex-col justify-center items-center lg:items-center w-full">
              <div className="w-full lg:max-w-[500px] my-6 border rounded-lg flex flex-col gap-4">
                <div className="w-full px-6 pb-8 lg:min-w-[500px] bg-white p-6 rounded-lg">
                  <div className="my-4">
                    <h1 className="text-2xl font-bold">Welcome!</h1>
                    <p>Welcome to Wevest. Never stop leanring!</p>
                  </div>
                  {message && (
                    <div className="text-sm text-red-500 flex justify-end">
                      {message}
                    </div>
                  )}
                  <RegisterForm
                    isSubmitting={isSubmitting}
                    message={message}
                    onSubmit={handleSubmit}
                  />
                  <div>
                    <span className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                      Already have an account?{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
