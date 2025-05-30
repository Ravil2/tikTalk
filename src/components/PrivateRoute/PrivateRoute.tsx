import type React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  if (!auth.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
