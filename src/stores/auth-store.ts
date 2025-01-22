// login

import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { ILoginState, IUserFromToken } from "./types/auth.types";
import { persist } from "zustand/middleware";
import { login } from "@/services/auth-api";
import { destroyCookie, setCookie } from "nookies";

const initialState = {
  token: null,
  user: null,
  error: undefined,
  isAuthenticated: false,
};

export const useAuthStore = create<ILoginState>()(
  persist(
    (set) => ({
      ...initialState,

      login: async (username, password) => {
        try {
          const response = await login(username, password);
          const token = response?.token;
          const user = jwtDecode(response?.token) as IUserFromToken;

          const tokenExpiry : number = process.env.NEXT_PUBLIC_TOKEN_EXPIRY as unknown as number;
          const userDataExpiry = tokenExpiry * 1000;

          setCookie(null, "authToken", token, {
            maxAge: tokenExpiry,
            path: "/",
          });

          setTimeout(() => {
            destroyCookie(null, "authToken");
            set({ ...initialState });
            localStorage.removeItem("auth");
          }, userDataExpiry);

          set({
            user,
            isAuthenticated: true,
            error: null,
          });
        } catch (error) {
          const errorMessage =
            (
              error as {
                response?: {
                  data?: {
                    message?: string;
                  };
                };
              }
            ).response?.data?.message || "Login failed";

          set({
            error: errorMessage,
            token: null,
            user: null,
            isAuthenticated: false,
          });

          destroyCookie(null, "authToken");
        }
      },
      logout: () => {
        destroyCookie(null, "authToken");
        set({ ...initialState });
      },
    }),
    {
      name: "auth",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);
