"use client";

import useAuth from "@/hooks/useAuth";

import CourseCard from "./CourseCard";
import Link from "next/link";

import Loader from "@/components/Shared/Loader";
import { useQuery } from "react-query";
import { admissionsCourses } from "@/api/courses";

const Courses = () => {
  const { user } = useAuth();
  const { data: coursesInfo, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => await admissionsCourses(user?.email),
    enabled: !!user?.email,
  });
  if (isLoading) {
    return <Loader />;
  }

  console.log(coursesInfo);
  return (
    <>
      {coursesInfo?.length ? (
        <div className="flex flex-col justify-center items-center gap-10 my-10">
          {coursesInfo.map(
            (course) =>
              course.courseInfo.map((course) => (
                <CourseCard key={course.courseId} id={course.courseId} />
              ))
            // <CourseCard key={course._id} data={course} />
          )}
        </div>
      ) : (
        <div className="min-h-[calc(100vh-128px)] flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
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
