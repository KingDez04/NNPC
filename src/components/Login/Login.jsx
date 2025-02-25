import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import NNPCLogo from "../../assets/nnpcLoginLogo.png";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = (data) => {
    axios
      .post("https://api", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { token, message } = response.data;
        if (token) {
          localStorage.setItem("authToken", token);
          toast.success("Login is Successful!");
          navigate("/profile", { replace: true });
        } else {
          alert("No token received from server.");
        }
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "An error occurred during login";
        toast.error("Oops, an error occurred, try again");
        console.error("Login error:", error);
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-[#192F3D] border-[0.2px] rounded-[20px] h-[442px] w-[596px]">
        <div className="flex flex-col pt-[31px] px-[53px] items-center gap-[32px]">
          <div>
            <img
              src={NNPCLogo}
              alt="nnpc logo"
              className="w-[157px] h-[88.313px]"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[32px]"
            noValidate
          >
            <div className="text-[15.18px] leading-normal font-normal">
              <input
                className="w-[489px] h-[52px] rounded-[11px] border-[0.3px] border-[#192F3D] placeholder-[#858484] bg-[#F1EEEE7A] pl-[25px]"
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <p className="text-red-600">{errors.email?.message}</p>
            </div>
            <div className="text-[15.18px] leading-normal font-normal relative">
              <input
                className="w-[489px] h-[52px] rounded-[11px] border-[0.3px] border-[#192F3D] placeholder-[#858484] bg-[#F1EEEE7A] pl-[25px]"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]{6,}$/,
                    message: "Invalid password format",
                  },
                })}
              />
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
            <button className="w-[489px] h-[52px] rounded-[20px] border-[0.3px] text-white bg-[#192F3D] text-[21.18px] leading-normal font-medium">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
