"use client";
import Link from "next/link";
import { useState } from "react";

import Field from "../Shared/Form/Field";
import { useForm } from "react-hook-form";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loading, setLoading, googleSignIn, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const pathname = usePathname();
  console.log(pathname);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (formData) => {
    console.log(formData);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();
      router.push(redirectTo);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (user && pathname === "/login") {
    toast.success("😒 You are Already Loged In");
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
                className="btn text-white font-semibold w-full"
              >
                Login
              </button>
              <p className="text-sm font-light text-white ">
                Don’t have an account yet?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 "
                >
                  Register
                </Link>
              </p>
            </form>
            <hr />
            {/* Social Login */}
            <button
              onClick={handleGoogleLogin}
              className="flex justify-center items-center w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-md  px-6 py-2 text-lg font-medium text-gray-800 hover:bg-gray-200 focus:outline-none "
            >
              <svg
                className="h-8 w-8 mr-2 "
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      >
                        {" "}
                      </path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      >
                        {" "}
                      </path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      >
                        {" "}
                      </path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      >
                        {" "}
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="">Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
