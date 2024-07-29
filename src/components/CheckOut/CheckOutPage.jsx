"use client";
import { getUserCartItems } from "@/api/courses";
import useAuth from "@/hooks/useAuth";
import { getTotalPrice } from "@/lib";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Field from "../Shared/Form/Field";
import { useForm } from "react-hook-form";
import { completePurchase } from "@/api/admissions";
import { useRouter } from "next/navigation";

const CheckOutPage = () => {
  const [subTotalPrice, setSubTotalPrice] = useState(null);
  const [onlineCharge, setOnlineCharge] = useState(50);
  const [totalPrice, setTotalPrice] = useState(null);
  const [discount, setDiscount] = useState(0.15);
  const router = useRouter();

  const { user } = useAuth();
  // Fetch Cart Items using react query
  const {
    data: courses = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const items = await getUserCartItems(user?.email);
      return items || [];
    },
    enabled: !!user?.email,
    initialData: [],
  });

  // Get total price
  useEffect(() => {
    const SubtotalPrice = getTotalPrice(courses);

    setSubTotalPrice(SubtotalPrice);
    setTotalPrice(subTotalPrice + onlineCharge - totalPrice * discount);
  }, [courses, onlineCharge, subTotalPrice, discount, totalPrice]);

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    const data = {
      firstName: formData.fName,
      lastName: formData.lName,
      shippingEmail: formData.email,
      email: user?.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      totalAmount: Math.ceil(totalPrice),
    };

    const courseInfo = courses.map((course) => {
      return {
        courseId: course._id,
        teacherEmail: course.teacher.email,
      };
    });

    try {
      const result = await completePurchase(user?.email, courseInfo, data);
      const { url } = result;
      console.log(result);
      if (url) {
        // courseIds.map(async (courseId) => {
        //   const result = await removeCourseFromCart(courseId, user?.email);
        //   console.log(result);
        // });
        window.location.replace(url);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch request checking
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Fetching an Error</div>;
  }

  return (
    <div className="font-[sans-serif] backdrop-blur-xl bg-white/10">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
        <div className="backdrop-blur-lg bg-white/10 sm:h-screen  sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {!isLoading &&
                  !isError &&
                  courses?.map((course) => (
                    <div key={course._id} className="flex items-start gap-4">
                      <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                        <Image
                          alt="course image"
                          width={100}
                          height={100}
                          src={course?.img}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base text-white">
                          {course?.title}
                        </h3>
                        <ul className="text-xs text-gray-300 space-y-2 mt-2">
                          <li className="flex flex-wrap gap-4">
                            Duration
                            <span className="ml-auto">
                              {course?.duration} Month
                            </span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Category
                            <span className="ml-auto">{course?.category}</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Price
                            <span className="ml-auto">
                              {course?.price} (BDT)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base text-white">
                Sub Total <span className="ml-auto">{subTotalPrice} (BDT)</span>
              </h4>
              <h4 className="flex flex-wrap gap-4 text-base text-white">
                Online Charge{" "}
                <span className="ml-auto">{onlineCharge} (BDT)</span>
              </h4>
              <h4 className="flex flex-wrap gap-4 text-base text-white">
                Discount <span className="ml-auto"> 15%</span>
              </h4>
              <h4 className="flex flex-wrap gap-4 text-base text-white">
                Total Price{" "}
                <span className="ml-auto">{Math.ceil(totalPrice)} (BDT)</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 ">
          <h2 className="text-2xl font-bold text-white">Complete your order</h2>
          <form onSubmit={handleSubmit(submitForm)} className="mt-8">
            <div>
              <h3 className="text-base text-white mb-4">Shipping Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Field
                  required={true}
                  label={"First Name"}
                  error={errors.fName}
                >
                  <input
                    {...register("fName", {
                      required: "First Name is Required",
                    })}
                    name="fName"
                    type="text"
                    placeholder="First Name"
                    className={`${
                      errors.fName ? "border-red-500" : "border-white "
                    } px-4 py-3 backdrop-blur-sm border bg-white/40 text-white w-full text-sm rounded-md focus:outline-none placeholder:text-white`}
                  />
                </Field>
                <Field required={true} label={"Last Name"} error={errors.lName}>
                  <input
                    {...register("lName", {
                      required: "Last Name is Required",
                    })}
                    type="text"
                    name="lName"
                    placeholder="Last Name"
                    className={`${
                      errors.lName ? "border-red-500" : "border-white "
                    } px-4 py-3 backdrop-blur-sm border bg-white/40 text-white w-full text-sm rounded-md focus:outline-none placeholder:text-white`}
                  />
                </Field>
                <Field
                  required={true}
                  label={"Your Email Address"}
                  error={errors.email}
                >
                  <input
                    {...register("email", {
                      required: "Email Address is Required",
                    })}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`${
                      errors.email ? "border-red-500" : "border-white "
                    } px-4 py-3 backdrop-blur-sm border bg-white/40 text-white w-full text-sm rounded-md focus:outline-none placeholder:text-white`}
                  />
                </Field>
                <Field
                  required={true}
                  label={"Your Phone Number"}
                  error={errors.phone}
                >
                  <input
                    {...register("phone", {
                      required: "Phone Number is Required",
                      minLength: {
                        value: 11,
                        message: "Phone Number is Invalid",
                      },
                    })}
                    name="phone"
                    type="number"
                    placeholder="Phone No."
                    className={`${
                      errors.phone ? "border-red-500" : "border-white "
                    } px-4 py-3 backdrop-blur-sm border bg-white/40 text-white w-full text-sm rounded-md focus:outline-none placeholder:text-white`}
                  />
                </Field>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-base text-white mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Field required={true} label={"Address"} error={errors.address}>
                  <input
                    {...register("address", {
                      required: "Address is Required",
                    })}
                    name="address"
                    type="text"
                    placeholder="Address Line"
                    className={`${
                      errors.address ? "border-red-500" : "border-white "
                    } px-4 py-3 backdrop-blur-sm border bg-white/40 text-white w-full text-sm rounded-md focus:outline-none placeholder:text-white`}
                  />
                </Field>
                <Field required={true} label={"City"} error={errors.city}>
                  <input
                    {...register("city", {
                      required: "City is Required",
                    })}
                    name="city"
                    type="text"
                    placeholder="City"
                    className={`${
                      errors.city ? "border-red-500" : "border-white "
                    } px-4 py-3 backdrop-blur-sm border bg-white/40 text-white w-full text-sm rounded-md focus:outline-none placeholder:text-white`}
                  />
                </Field>
                <Field required={true} label={"State"} error={errors.state}>
                  <input
                    {...register("state", {
                      required: "State is Required",
                    })}
                    name="state"
                    type="text"
                    placeholder="State"
                    className={`${
                      errors.state ? "border-red-500" : "border-white "
                    } px-4 py-3 backdrop-blur-sm border bg-white/40 text-white w-full text-sm rounded-md focus:outline-none placeholder:text-white`}
                  />
                </Field>
                <Field required={true} label={"Zip Code"} error={errors.zip}>
                  <input
                    {...register("zip", {
                      required: "Zip code is Required",
                    })}
                    name="zip"
                    type="text"
                    placeholder="Zip Code"
                    className={`${
                      errors.zip ? "border-red-500" : "border-white "
                    } px-4 py-3 backdrop-blur-sm border bg-white/40 text-white w-full text-sm rounded-md focus:outline-none placeholder:text-white`}
                  />
                </Field>
              </div>
              <div className="flex gap-4 max-md:flex-col mt-8">
                <button
                  type="button"
                  className="rounded-md transition-all duration-150 px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:backdrop-blur-3xl hover:bg-white/10 hover:border border  hover:border-gray-100 text-white max-md:order-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md transition-all duration-150 px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CheckOutPage;
