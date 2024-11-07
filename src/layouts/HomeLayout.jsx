import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
