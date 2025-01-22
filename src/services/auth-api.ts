import axios from "@/config/axios/public.instance";

export const login = async (username: string, password: string) => {
  const response = await axios.post("/auth/login", { username, password });
  return response.data;
};