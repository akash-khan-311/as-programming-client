"use client";
import {
  admissionsCourses,
  getBookmarksForStudent,
  removeCourseFromBookmarks,
  removeCourseFromCart,
  saveCourseToBookmarks,
} from "@/api/courses";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

const HandleAddToBookmark = ({ id }) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [role] = useRole();

  // Get Bookmarsk for db
  const { data: bookmarksItems } = useQuery({
    queryKey: ["bookmarksItems"],
    queryFn: async () => await getBookmarksForStudent(user.email),
    enabled: !!user?.email,
  });

  // Determine if course is in cart
  const Inbookmarks = bookmarksItems?.some((item) => item._id === id);

  // fetch admission courses
  const { data: admissionCourses, isloading: admissionCoursesLoading } =
    useQuery({
      queryKey: ["admissionsCourses"],
      queryFn: async () => await admissionsCourses(user?.email),
      enabled: role === "student",
    });

  // Check if course is an admission course
  const allAdmisionCourses = admissionCourses?.courses;
  const isAdmission = allAdmisionCourses?.some(
    (course) => course?.courseInfo[0]?.courseId === id
  );

  // Mutation to add or remove course from cart
  const { mutateAsync: mutateAddToBookmark } = useMutation(
    (courseId) => saveCourseToBookmarks(courseId, user?.email),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("bookmarksItems");
        toast.success("Course added to bookmarks");
      },
      onError: (error) => {
        console.error("Error adding course to bookmarks:", error);
        toast.error("Failed to add course to bookmarks");
      },
    }
  );
  const { mutateAsync: mutateRemoveFromBookmarks } = useMutation(
    (courseId) => removeCourseFromBookmarks(courseId, user.email),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("bookmarksItems");
        toast.success("Course removed from bookmarks");
      },
      onError: (error) => {
        console.error("Error removing course from bookmarks:", error);
        toast.error("Failed to remove course from bookmarks");
      },
    }
  );

  const handleAddToBookmarks = async () => {
    try {
      if (role === "teacher" || role === "admin") {
        Swal.fire({
          title: "You are not allowed to add courses to Bookmarks.",
          text: `Because You are ${role === "teacher" ? "Teacher" : "Admin"}`,
          icon: "error",
        });
        return;
      }
      if (Inbookmarks) {
        await mutateRemoveFromBookmarks(id);
      } else {
        await mutateAddToBookmark(id);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error("Failed to update cart");
    }
  };
  return (
    <>
      <button
        disabled={isAdmission}
        onClick={handleAddToBookmarks}
        className="select-none mt-4 disabled:bg-gray-500 disabled:cursor-not-allowed text-sm md:text-lg lg:text-xl w-full capitalize rounded-lg bg-pink-500 py-2 lg:py-3 px-6 text-center align-middle font-sans font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40  focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        {Inbookmarks ? "Remove From Bookmarks" : "Add To Bookmarks"}
      </button>
    </>
  );
};
export default HandleAddToBookmark;
