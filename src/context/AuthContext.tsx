import { createContext, useContext, useState, type ReactNode } from "react";
import Cookies from "js-cookie";

interface IAuthContext {
  isAuth: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(() => !!Cookies.get("token") || false);

  const login = (token: string) => {
    setIsAuth(true);
    Cookies.set("token", token);
  };

  const logout = () => {
    setIsAuth(false);
    Cookies.remove("token");
  };

  const value = { isAuth, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
