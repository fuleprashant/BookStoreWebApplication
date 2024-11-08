import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const [authUser] = useAuth();

  // Redirect to /signup if not authenticated
  return authUser ? children : <Navigate to="/signup" />;
};

export default ProtectedRoute;
