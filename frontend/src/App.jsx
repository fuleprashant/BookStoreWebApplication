import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Courses from "./components/courses";
import HomeLayout from "./layouts/HomeLayout";
import CoursesLayout from "./layouts/CoursesLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
    },
    {
      path: "/courses",
      element: <CoursesLayout />,
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
