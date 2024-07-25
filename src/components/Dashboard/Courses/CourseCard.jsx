"use client";

import { getSingleCourse } from "@/api/courses";
import Loader from "@/components/Shared/Loader";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";

const CourseCard = ({ id }) => {
  console.log(id);
  const {
    data: singleCourse,
    refetch,
    isLoading,
  } = useQuery(["course", id], async () => await getSingleCourse(id), {
    enabled: !!id, // Only fetch if user email is available
  });

  if (isLoading) {
    return <div className="text-4xl text-white">Course Comming.........</div>;
  }
  console.log(singleCourse);

  return (
    <div className=" mx-auto">
      <div className="flex flex-col  rounded-lg backdrop-blur-md bg-white/20 text-white min-h-52 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:flex-row">
        <Image
          width={300}
          height={300}
          className=" w-1/3 rounded-t-lg object-cover md:!rounded-none md:!rounded-l-lg"
          src={singleCourse.img}
          alt={singleCourse.title}
        />
        <div className="flex justify-center flex-1 flex-col p-6">
          <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-semibold text-blue-gray-900 my-3">
            {singleCourse.title}
          </h2>

          <div className="flex flex-col gap-y-5">
            <button className="w-full transition-all duration-200 bg-pink-600 px-10 py-2 rounded-lg hover:bg-pink-500">
              Continue Course
            </button>
            <button className="w-full transition-all duration-200 bg-pink-600 px-10 py-2 rounded-lg hover:bg-pink-500">
              Submit Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
