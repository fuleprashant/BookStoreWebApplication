import React from "react";
import allData from "../../public/list.json";
import Card from "./Card";

// const Courses = () => {
//   return (
//     <div>
//       <div className="mx-[60px] md:mx-[100px]">
//         <h1 className="text-3xl font-semibold text-center mb-8 ">
//           Our Courses
//         </h1>

//         {/* Wrapper div for grid layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {allData.map((item) => {
//             return (
//               <Card
//                 item={item}
//                 key={item.id}
//                 className="flex flex-col my-6" // pass className for individual card styling
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;
const Courses = () => {
  return (
    <div>
      <div className="mx-[30px] md:mx-[100px] pt-16 z-10">
        {" "}
        {/* Add pt-16 or more padding here */}
        <h1 className="text-3xl font-semibold text-center mb-8">Our Courses</h1>
        {/* Wrapper div for grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {allData.map((item) => {
            return (
              <Card
                item={item}
                key={item.id}
                className="flex flex-col my-6 " // pass className for individual card styling
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;