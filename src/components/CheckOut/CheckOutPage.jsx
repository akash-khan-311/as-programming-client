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

  const handleCompleteOrder = async () => {
    const data = {
      fullName: user?.displayName,
      email: user?.email,
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
    <div className=" backdrop-blur-xl bg-white/10">
      <div className=" h-full">
        <div className="backdrop-blur-lg bg-white/10  ">
          <div className="">
            <div className="px-4 py-8 sm:overflow-auto ">
              <div className="space-y-4">
                {!isLoading &&
                  !isError &&
                  courses?.map((course) => (
                    <div
                      key={course._id}
                      className="flex items-start gap-4 overscroll-y-auto"
                    >
                      <div className="w-52 h-full  max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                        <Image
                          alt="course image"
                          width={300}
                          height={300}
                          src={course?.img}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-full">
                        <h3 className="text-xl md:text-2xl lg:text-3xl text-white">
                          {course?.title}
                        </h3>
                        <ul className=" text-gray-300 space-y-2 mt-2 text-xs">
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
            <div className=" bg-gray-800 w-full p-4">
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
            <button
              onClick={handleCompleteOrder}
              className="btn w-full py-2 rounded-b-lg hover:text-white"
            >
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOutPage;
