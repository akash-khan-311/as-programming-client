"use client";

import { getAllCourses } from "@/api/courses";
import CourseCard from "../Shared/CourseCard";
import { useEffect, useRef, useState, useCallback } from "react";
import SkeletonCard from "../Shared/SkeletonCard/SkeletonCard";

const productsPerPage = 3;

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(3);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const fetchCourses = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const data = await getAllCourses(page, productsPerPage);
      if (data.result.length === 0) {
        setHasMore(false);
      } else {
        setCourses((prevCourses) => [...prevCourses, ...data.result]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const loaderEntry = entries[0];
      if (loaderEntry.isIntersecting && hasMore && !loading) {
        fetchCourses();
      }
    });

    const loaderNode = loaderRef.current;
    if (loaderNode) {
      observer.observe(loaderNode);
    }

    // Cleanup
    return () => {
      if (loaderNode) {
        observer.unobserve(loaderNode);
      }
      observer.disconnect();
    };
  }, [fetchCourses, hasMore, loading]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course._id} data={course} />
        ))}
      </div>
      {hasMore && (
        <div ref={loaderRef}>
          <SkeletonCard />
        </div>
      )}
    </>
  );
};

export default CourseList;
