import React from "react";
import { MdEmail } from "react-icons/md";
const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="mx-[60px] md:mx-[100px] mt-12 md:mt-32">
        <div className="space-y-12">
          <h1 className="text-4xl ">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!</span>
          </h1>
          <p>
            Welcome to Swarajya BookStore, where we believe that books have the
            power to transform lives. Whether you're an avid reader, a student
            looking for the latest textbooks, or someone searching for a gift
            for a loved one, our wide range of books is sure to meet your needs.
          </p>
        </div>
        <div className=" relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Email..."
            className="w-full p-3 pl-10  pr-4 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-slate-200 mt-5"
          />
          <MdEmail
            className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <button className="px-3 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-800 transition duration-300 mt-5">
          Secondray
        </button>
      </div>
      <div className="mt-12 md:mt-32">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/book-shopping-store-illustration-download-in-svg-png-gif-file-formats--bookstore-building-shop-stores-pack-e-commerce-illustrations-4481099.png"
          alt=""
          className=" ml-14 md:ml-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px]"
        />
      </div>
    </div>
  );
};

export default Banner;
