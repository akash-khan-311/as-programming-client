"use client";
import Link from "next/link";
import { useState } from "react";

import Field from "../Shared/Form/Field";
import { useForm } from "react-hook-form";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import { getToken, saveUser } from "@/api/auth";
import HandleGoogleLogin from "../Shared/handleGoogleLogin";

const Login = () => {
  const { loading, Login, setLoading, user, logOut } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = async (formData) => {
    try {
      const result = await Login(formData.email, formData.password);
      console.log(result);
      // Get Token
      const token = await getToken(result?.user?.email);
      console.log(token);
      if (token) {
        toast.success("🦄 Login Successful");
        router.push(redirectTo);
      } else {
        logOut();
        toast.error("🦄 Login Failed");
      }
    } catch (error) {
      if (error.message.includes("email-already-in-use")) {
        return toast.error("��� Email Already In Use");
      } else if (error.message.includes("auth/invalid-credential")) {
        return toast.error("No Account Found, Please Create a Account");
      }
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (user && pathname === "/login") {
    // toast.success("😒 You are Already Loged In");
    router.push(redirectTo);
  }

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 my-0 lg:my-14">
        <div className="w-full backdrop-blur-xl bg-white/5 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-bold leading-tight tracking-tight text-pink-600">
              Login
            </h1>
            <form
              onSubmit={handleSubmit(submitForm)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <Field required={true} label="Email" error={errors.email}>
                <input
                  {...register("email", { required: "Email ID is Required" })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  className={`backdrop-blur-sm ${
                    !!errors.email ? "border-red-500" : "border-white "
                  } bg-white/10 border   sm:text-sm rounded-lg my-2 focus:outline-none block w-full p-2.5   text-white "
                    `}
                />
              </Field>

              <div className="relative">
                <Field
                  label="Password "
                  required={true}
                  error={errors.password}
                >
                  <input
                    {...register("password", {
                      required: "Password  is Required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={`backdrop-blur-sm ${
                      !!errors.password ? "border-red-500" : "border-white "
                    } bg-white/10 border  focus:outline-none sm:text-sm rounded-lg  block w-full p-2.5 overflow-hidden my-2 text-white "
                  `}
                  />

                  <div className="flex items-center me-4 my-2">
                    <input
                      onChange={() => setShowPassword(!showPassword)}
                      checked={showPassword}
                      id="red-checkbox"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="red-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Show Password
                    </label>
                  </div>
                </Field>
              </div>
              <button
                type="submit"
                className="btn py-2 text-white font-semibold w-full"
              >
                {loading ? <PulseLoader size={5} color="#FFFFFF" /> : "Login"}
              </button>
              <p className="text-sm font-light text-white ">
                Don’t have an account yet?{" "}
                <Link
                  href={`/register?redirect=${redirectTo}`}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 "
                >
                  Register
                </Link>
              </p>
            </form>
            <hr />
            {/* Social Login Comming Soon*/}

            {/* <HandleGoogleLogin /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
