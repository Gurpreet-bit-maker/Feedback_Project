import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// apna context import kar lena
import Result from "../../context/Auth";

function AuthComponent() {
  const { user, loading } = useContext(Result);
  // console.log("AuthComponent user:", user); // ✅ yahan lagao
  // agar user login hai
  if (loading) return <p>Loading...</p>;
  if (user) {
    return <Outlet />;
  }
  // agar login nahi hai
  return <Navigate to="/login" />;
}

export default AuthComponent;
