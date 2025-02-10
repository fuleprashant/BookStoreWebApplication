import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(
        "http://localhost:9865/user/login",
        userInfo
      );
      localStorage.setItem("Users", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <div className="bg-slate-100 w-[500px] h-[500px] mt-44 mx-auto flex flex-col justify-center items-center space-y-6">
        <h1 className="font-bold text-2xl text-center pt-5">Login</h1>
        <form className="space-y-6 w-3/4" onSubmit={handleSubmit(onSubmit)}>
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
              Login
            </Button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p>
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-blue-500 hover:underline">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
