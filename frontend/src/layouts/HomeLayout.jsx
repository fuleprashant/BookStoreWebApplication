import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";

const HomeLayout = () => {
  return (
    <div className="dark:bg-slate-600 dark:text-white bg-white">
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
