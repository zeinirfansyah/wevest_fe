import { Form, Formik } from "formik";
import React from "react";
import { LoginSchema } from "../_form-model/login-validation";
import { LoginFormProps } from "../_types/login.types";
import { FormikInput } from "../../../../components/molecules/formik_components/formik-input";
import { Button } from "@/components/atoms/button";
import Link from "next/link";

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit }) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="my-3">
            <label htmlFor="username" className="text-sm">Username</label>
            <FormikInput name="username" type="text" />
          </div>

          <div>
            <label htmlFor="password" className="text-sm">Password</label>
            <FormikInput name="password" type="password" />
          </div>

          <Button variant="blue" disabled={isSubmitting}>
            Login
          </Button>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full my-6">
            <Link
              href="/register"
              className="text-xs text-slate-500 hover:text-slate-700"
            >
              I don`t have an account?
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
