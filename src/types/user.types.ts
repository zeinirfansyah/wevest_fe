export interface IUserType {
  id?: string;
  user_code?: string | null;
  fullname: string;
  username: string;
  email: string;
  phone?: string | null;
  job_status?: string | null;
  field?: string | null;
  password: string;
  confirm_password: string;
  avatar?: string | null;
}
