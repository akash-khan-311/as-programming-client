"use client";

import { getBookmarksForStudent } from "@/api/courses";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "react-query";
import CourseCard from "../Shared/CourseCard";

const BookmarkList = () => {
  const { user } = useAuth();
  const { data: bookmarks, isLoading } = useQuery({
    queryKey: ["bookmarksItems"],
    queryFn: async () => await getBookmarksForStudent(user?.email),
    enabled: !!user?.email,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      {bookmarks?.length <= 0 ? (
        <p className="text-3xl md:text-4xl lg:text-5xl flex justify-center items-center h-[calc(100vh-428px)]">
          You Have No Bookmarks Course
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {bookmarks?.map((bookmark) => (
              <CourseCard key={bookmark._id} data={bookmark} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
export default BookmarkList;
