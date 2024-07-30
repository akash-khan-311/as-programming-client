"use client";

import { admissionsCourses } from "@/api/courses";
import useAuth from "@/hooks/useAuth";
import { useInfiniteQuery } from "react-query";
import CourseCard from "./CourseCard";
import Link from "next/link";
import { useEffect } from "react";
import Loader from "@/components/Shared/Loader";

const Courses = () => {
  const { user } = useAuth();

  // Fetch admissions courses with infinite scroll
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery(
      ["courses", user?.email],
      async ({ pageParam = 0 }) =>
        await admissionsCourses(user?.email, pageParam, 2),
      {
        enabled: !!user?.email, // Only fetch if user email is available
        getNextPageParam: (lastPage, pages) =>
          lastPage.hasNextPage ? pages.length + 1 : false,
      }
    );

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        if (hasNextPage) fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {data?.pages?.flat().length ? (
        <div className="flex flex-col justify-center items-center gap-10 my-10">
          {data.pages.map((page, pageIndex) =>
            page.courses.map((course, courseIndex) =>
              course.courseInfo.map((info) => (
                <CourseCard key={info.courseId} id={info.courseId} />
              ))
            )
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
      {isFetchingNextPage && (
        <div className="text-2xl text-white text-center">Loading more...</div>
      )}
    </>
  );
};

export default Courses;
