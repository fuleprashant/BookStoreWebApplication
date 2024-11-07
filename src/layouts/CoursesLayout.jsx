import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Courses from "../components/courses";

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
