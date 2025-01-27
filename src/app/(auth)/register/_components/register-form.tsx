"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import { registerSchema } from "./form-model/validation-schema";
import { initialValues } from "./form-model/initial-form";
import { IRegisterFormProps } from "./form-model/register.types";
import { FormikInput } from "@/components/molecules/formik_components/formik-input";
import { Button } from "@/components/atoms/button";

export const RegisterForm: React.FC<IRegisterFormProps> = ({
  isSubmitting,
  onSubmit,
}) => {
  const job_status = ["TIDAK_BEKERJA", "BEKERJA", "MAHASISWA"];

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <>
            <Form>
              <div className="w-full flex flex-col py-2 gap-2">
                <FormikInput name="fullname" label="Full Name" />
                <FormikInput name="username" label="Username" />
                <div className="flex flex-col lg:flex-row gap-2">
                  <FormikInput name="email" label="Email" />
                  <FormikInput name="phone" label="Phone" />
                </div>
                {/* <FormikInput name="job_status" label="Job Status" /> */}
                <div className="relative pb-1 flex flex-col w-full">
                  <label className="text-sm mb-1">Job Status</label>
                  <Field
                    as="select"
                    name="job_status"
                    label="Job Status"
                    className={`px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray`}
                  >
                    <option value="">Select Job Status</option>
                    {job_status.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </Field>
                </div>
                <FormikInput name="field" label="Field" />
                <div className="flex flex-col lg:flex-row gap-2">
                  <FormikInput
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <FormikInput
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                  />
                </div>
                <Button disabled={isSubmitting} className="text-sm my-2">
                  {isSubmitting ? "Registering..." : "Register"}
                </Button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
