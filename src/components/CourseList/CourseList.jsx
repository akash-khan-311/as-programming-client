"use client";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getAllCourses } from "@/api/courses";
import CourseCard from "../Shared/CourseCard";
import SkeletonCard from "../Shared/SkeletonCard/SkeletonCard";

const productsPerPage = 3;

const CourseList = () => {
  const { ref, inView } = useInView();
  const queryClient = useQueryClient();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    "courses",
    ({ pageParam = 1 }) => getAllCourses(pageParam, productsPerPage),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.result.length === 0) return undefined;
        return pages.length + 1;
      },
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "loading") return <SkeletonCard />;
  if (status === "error") return <p>Error fetching courses: {error.message}</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {data?.pages?.map((page) =>
          page.result.map((course) => (
            <CourseCard key={course._id} data={course} />
          ))
        )}
      </div>
      <div ref={ref} className="text-center mt-10">
        {isFetchingNextPage ? (
          <SkeletonCard />
        ) : hasNextPage ? (
          <span className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            More Course Loading.....
          </span>
        ) : (
          <span className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            No more courses
          </span>
        )}
      </div>
    </>
  );
};

export default CourseList;
