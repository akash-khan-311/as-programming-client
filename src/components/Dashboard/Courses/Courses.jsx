"use client";

import { admissionsCourses } from "@/api/courses";
import useAuth from "@/hooks/useAuth";

import { useQuery } from "react-query";
import CourseCard from "./CourseCard";
import Loader from "@/components/Shared/Loader";
import Link from "next/link";

const Courses = () => {
  const { user } = useAuth();

  // Fetch admissions courses
  const {
    data: courses,
    refetch,
    isLoading,
  } = useQuery(
    ["courses", user?.email],
    async () => await admissionsCourses(user?.email),
    {
      enabled: !!user?.email, // Only fetch if user email is available
    }
  );

  console.log(courses);

  if (isLoading) {
    return <div className="text-4xl text-white">Loading.........</div>;
  }

  return (
    <>
      {courses.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
          {courses?.map((course) =>
            course.courseInfo.map((info) => (
              <CourseCard key={info.courseId} id={info.courseId} />
            ))
          )}
        </div>
      ) : (
        <div className=" min-h-[calc(100vh-128px)] flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  text-center">
            Ops! you have no course purchased yet
          </h1>
          <Link
            href={"/courses"}
            className="bg-pink-600 py-2 px-8 rounded-md transition-all duration-200 hover:bg-pink-800 mt-4"
          >
            Purchase Course
          </Link>
        </div>
      )}
    </>
  );
};
export default Courses;
