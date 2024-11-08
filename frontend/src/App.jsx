import React from "react";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Courses from "./components/courses";
import HomeLayout from "./layouts/HomeLayout";
import CoursesLayout from "./layouts/CoursesLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useAuth } from "./context/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoutes";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log("the auth user is", authUser);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
    },
    {
      path: "/courses",
      element: (
        <ProtectedRoute>
          <CoursesLayout />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
