import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook for the createcontext
export const useAuth = () => useContext(AuthContext);
