import { createContext, useContext, useState, type ReactNode } from "react";
import Cookies from "js-cookie";
import type { AuthResponse } from "../api/interfaces";

interface IAuthContext {
  isAuth: boolean;
  login: (data: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(() => !!Cookies.get("token") || false);

  const login = (data: AuthResponse) => {
    setIsAuth(true);
    Cookies.set("token", data.access_token);
    Cookies.set("refresh_token", data.refresh_token);
  };

  const logout = () => {
    setIsAuth(false);
    Cookies.remove("token");
  };

  const value = { isAuth, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
