"use client";

import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from "react-query";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getAllCourses, addNewCourse } from "@/api/courses";
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
    const loadMoreCourses = () => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    };
    loadMoreCourses();
  }, [inView, hasNextPage, fetchNextPage]);

  const mutation = useMutation(addNewCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
    },
  });

  const handleAddCourse = async (courseData) => {
    try {
      await mutation.mutateAsync(courseData);
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  if (status === "loading") return <SkeletonCard />;
  if (status === "error") return <p>Error fetching courses: {error.message}</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {data.pages.map((page) =>
          page.result.map((course) => (
            <CourseCard key={course._id} data={course} />
          ))
        )}
      </div>
      <div ref={ref}>
        {isFetchingNextPage ? (
          <SkeletonCard />
        ) : hasNextPage ? (
          <span className="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl text-white font-bold mt-10">
            Load more
          </span>
        ) : (
          <span className="flex justify-center items-center text-2xl md:text-3xl lg:text-4xl text-white font-bold mt-10">
            No more courses
          </span>
        )}
      </div>
      <button
        className="hidden"
        onClick={() =>
          handleAddCourse({
            /* course data */
          })
        }
      >
        Add Course
      </button>
    </>
  );
};

export default CourseList;
