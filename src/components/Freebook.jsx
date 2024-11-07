import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default value for desktop
    slidesToScroll: 3, // Default value for desktop
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="mx-[60px] md:mx-[100px]">
          <h1 className="font-semibold text-xl pb-2 mt-3">
            Free Offered Courses
          </h1>
          <p className="mt-5">
            The Freebook component highlights an exclusive collection of courses
            available at no cost, perfect for learners seeking accessible
            educational resources. It dynamically filters and displays courses
            categorized as "Free" from an imported JSON file, ensuring users
            only see content they can access without payment.
          </p>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Freebook;
