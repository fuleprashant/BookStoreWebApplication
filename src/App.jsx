import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Courses from "./components/courses";
import HomeLayout from "./layouts/HomeLayout";
import CoursesLayout from "./layouts/CoursesLayout";

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
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
