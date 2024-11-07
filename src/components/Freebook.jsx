import React from "react";
import list from "../../public/list.json";

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  return (
    <div>
      <div className="mx-[60px] md:mx-[100px]">
        <h1 className="font-semibold text-xl pb-2 mt-3">Free Offred Courses</h1>
        <p className="mt-5">
          The Freebook component highlights an exclusive collection of courses
          available at no cost, perfect for learners seeking accessible
          educational resources. It dynamically filters and displays courses
          categorized as "Free" from an imported JSON file, ensuring users only
          see content they can access without payment
        </p>
      </div>
      
    </div>
  );
};

export default Freebook;
