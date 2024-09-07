"use client";
import Link from "next/link";
import { useState } from "react";

import Field from "../Shared/Form/Field";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";

import { useRouter, useSearchParams, redirect } from "next/navigation";
import { getToken, saveUser } from "@/api/auth";
import toast from "react-hot-toast";
import HandleGoogleLogin from "../Shared/handleGoogleLogin";

const RegsiterForm = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const {
    createUser,
    loading,
    setLoading,
    LogOut,
    updateUserProfileName,
    user,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = async (formData) => {
    try {
      const fullName = formData.fName + " " + formData.lName;
      const result = await createUser(formData.email, formData.password);
      await updateUserProfileName(fullName);
      // Save user in database
      await saveUser(result?.user);

      // Get Token
      const token = await getToken(result?.user?.email);
      if (!token) {
        toast.error("🦄 Login Failed");
        LogOut();
        return;
      }

      // Redirect
      router.push(redirectTo);
      toast.success("🦄 Register Successful");
      console.log(result);
    } catch (error) {
      if (error.message.includes("email-already-in-use")) {
        toast.error("🦄 Email Already In Use");
      }
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!user && (
        <div className="overflow-hidden">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 my-0 lg:my-14">
            <div className="w-full backdrop-blur-xl bg-white/5 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-bold leading-tight tracking-tight text-pink-600">
                  Register
                </h1>
                <form
                  onSubmit={handleSubmit(submitForm)}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div className="flex flex-col md:flex-row md:justify-between  md:items-center md:gap-5">
                    <Field
                      required={true}
                      label="First Name"
                      error={errors.fName}
                    >
                      <input
                        {...register("fName", {
                          required: "First Name is Required",
                        })}
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Your First Name"
                        className={`backdrop-blur-sm ${
                          !!errors.fName ? "border-red-500" : "border-white "
                        } bg-white/10 border   sm:text-sm rounded-lg my-2 focus:outline-none block w-full p-2.5   text-white "
                    `}
                      />
                    </Field>
                    <Field
                      required={true}
                      label="Last Name"
                      error={errors.lName}
                    >
                      <input
                        {...register("lName", {
                          required: "Last Name is Required",
                        })}
                        type="text"
                        name="lName"
                        id="lName"
                        placeholder="Enter Your Full Name"
                        className={`backdrop-blur-sm ${
                          !!errors.lName ? "border-red-500" : "border-white "
                        } bg-white/10 border   sm:text-sm rounded-lg my-2 focus:outline-none block w-full p-2.5   text-white "
                    `}
                      />
                    </Field>
                  </div>
                  <Field required={true} label="Email" error={errors.email}>
                    <input
                      {...register("email", {
                        required: "Email ID is Required",
                      })}
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
                        } bg-white/10 border  focus:outline-none sm:text-sm rounded-lg  block w-full p-2.5  my-2 text-white "
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
                    className="btn py-2 text-white font-semibold w-full hover:text-white"
                  >
                    {loading ? "Loading..." : "Register"}
                  </button>
                  <p className="text-sm font-light text-white ">
                    have an account?{" "}
                    <Link
                      href={`/login?redirect=${redirectTo}`}
                      className="font-medium hover:underline dark:text-primary-500 "
                    >
                      Login
                    </Link>
                  </p>
                </form>
                <hr />
                {/* Social Login coming soon*/}
                {/* <HandleGoogleLogin /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegsiterForm;
