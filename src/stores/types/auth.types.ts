export interface IUserFromToken {
    user_code?: string;
    fullname?: string;
    username?: string;
    email?: string;
    phone?: string;
    avatar?: string;
    role?: string;
}
export interface ILoginState {
    token?: string | null;
    user?: IUserFromToken | null;
    error?: string | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}
