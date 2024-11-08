// import React from "react";
// import { Controller, useForm } from "react-hook-form";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import axios from "axios";

// const SignUp = () => {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const { fullName, email, password } = data;
//     try {
//       const response = await axios.post("http://localhost:9865/user/signup", {
//         fullName,
//         email,
//         password,
//       });
//       console.log("the api", response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <div className="bg-slate-100 w-[500px] h-[600px] mt-32 mx-auto flex flex-col justify-center items-center space-y-6">
//         <h1 className="font-bold text-2xl text-center pt-5">Sign Up</h1>
//         <form className="space-y-6 w-3/4" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <Controller
//               name="name"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   label="Name"
//                   fullWidth
//                   {...field}
//                   error={!!errors.name}
//                   helperText={errors.name ? "Name is required" : ""}
//                 />
//               )}
//               rules={{ required: "Name is required" }}
//             />
//           </div>
//           <div>
//             <Controller
//               name="email"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   label="Email"
//                   type="email"
//                   fullWidth
//                   {...field}
//                   error={!!errors.email}
//                   helperText={errors.email ? "Email is required" : ""}
//                 />
//               )}
//               rules={{ required: "Email is required" }}
//             />
//           </div>
//           <div>
//             <Controller
//               name="password"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   label="Password"
//                   type="password"
//                   fullWidth
//                   {...field}
//                   error={!!errors.password}
//                   helperText={errors.password ? "Password is required" : ""}
//                 />
//               )}
//               rules={{ required: "Password is required" }}
//             />
//           </div>
//           <div className="flex justify-center">
//             <Button type="submit" variant="contained" color="primary">
//               Sign Up
//             </Button>
//           </div>
//         </form>
//         <div className="text-center mt-4">
//           <p>
//             Already have an account?{" "}
//             <NavLink to="/login" className="text-blue-500 hover:underline">
//               Login
//             </NavLink>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // 'data' will contain form values
    const { fullName, email, password } = data; // Destructure values from 'data'
    try {
      const response = await axios.post("http://localhost:9865/user/signup", {
        fullName,
        email,
        password,
      });
      console.log(response);
      localStorage.setItem("Users", JSON.stringify(response.data.user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-slate-100 w-[500px] h-[600px] mt-32 mx-auto flex flex-col justify-center items-center space-y-6">
        <h1 className="font-bold text-2xl text-center pt-5">Sign Up</h1>
        <form className="space-y-6 w-3/4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="fullName" // Name field should be 'fullName' instead of 'name'
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="Full Name"
                  fullWidth
                  {...field}
                  error={!!errors.fullName}
                  helperText={errors.fullName ? "Full Name is required" : ""}
                />
              )}
              rules={{ required: "Full Name is required" }}
            />
          </div>
          <div>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email ? "Email is required" : ""}
                />
              )}
              rules={{ required: "Email is required" }}
            />
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  {...field}
                  error={!!errors.password}
                  helperText={errors.password ? "Password is required" : ""}
                />
              )}
              rules={{ required: "Password is required" }}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
