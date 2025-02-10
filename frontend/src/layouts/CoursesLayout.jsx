import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

const CoursesLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Courses />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesLayout;
