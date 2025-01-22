import { FormikHelpers } from "formik";

export interface ILoginFormValues {
  username: string;
  password: string;
}

export interface LoginFormProps {
  handleSubmit: (
    values: ILoginFormValues,
    formikHelpers: FormikHelpers<ILoginFormValues>
  ) => void | Promise<void>;
}
