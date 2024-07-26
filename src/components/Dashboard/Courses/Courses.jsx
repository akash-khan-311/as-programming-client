"use client";

import { admissionsCourses } from "@/api/courses";
import useAuth from "@/hooks/useAuth";

import { useQuery } from "react-query";
import CourseCard from "./CourseCard";
import Loader from "@/components/Shared/Loader";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        {courses?.map((course) =>
          course.courseInfo.map((info) => (
            <CourseCard key={info.courseId} id={info.courseId} />
          ))
        )}
      </div>
    </>
  );
};
export default Courses;
