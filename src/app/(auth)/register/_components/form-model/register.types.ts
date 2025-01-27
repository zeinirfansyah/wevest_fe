export interface IRegisterType {
  fullname: string;
  username: string;
  email: string;
  phone?: string | null;
  job_status?: string | null;
  field?: string | null;
  password: string;
  confirm_password: string;
}

export interface IRegisterFormProps {
  isSubmitting: boolean;
  message: string | null;
  onSubmit: (values: IRegisterType) => Promise<void>;
}
