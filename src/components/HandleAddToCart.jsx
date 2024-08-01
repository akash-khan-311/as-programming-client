"use client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  admissionsCourses,
  getUserCartItems,
  removeCourseFromCart,
  saveCourseForUser,
} from "@/api/courses";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useRole from "@/hooks/useRole";
import Swal from "sweetalert2";
import { useAdmissionsCourses } from "@/hooks";

const HandleAddToCart = ({ id }) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [role] = useRole();

  // Fetch user's cart items
  const { data: cartItems } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => await getUserCartItems(user.email),
    enabled: !!user?.email,
  });

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

  // Determine if course is in cart
  const inCart = cartItems?.some((cartItem) => cartItem._id === id);

  // Mutation to add or remove course from cart
  const { mutateAsync: mutateAddToCart } = useMutation(
    (courseId) => saveCourseForUser(courseId, user.email),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cartItems");
        toast.success("Course added to cart");
      },
      onError: (error) => {
        console.error("Error adding course to cart:", error);
        toast.error("Failed to add course to cart");
      },
    }
  );

  const { mutateAsync: mutateRemoveFromCart } = useMutation(
    (courseId) => removeCourseFromCart(courseId, user.email),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cartItems");
        toast.success("Course removed from cart");
      },
      onError: (error) => {
        console.error("Error removing course from cart:", error);
        toast.error("Failed to remove course from cart");
      },
    }
  );

  // Handle adding/removing course from cart
  const handleAddToCart = async () => {
    try {
      if (role === "teacher" || role === "admin") {
        Swal.fire({
          title: "You are not allowed to add courses to cart.",
          text: `Because You are ${role === "teacher" ? "Teacher" : "Admin"}`,
          icon: "error",
        });
        return;
      }
      if (inCart) {
        await mutateRemoveFromCart(id);
      } else {
        await mutateAddToCart(id);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error("Failed to update cart");
    }
  };

  // Fetch cart items on component mount
  useEffect(() => {
    queryClient.invalidateQueries("cartItems");
  }, [queryClient]);

  return (
    <button
      disabled={isAdmission}
      onClick={handleAddToCart}
      className="select-none mt-4 disabled:bg-gray-500 disabled:cursor-not-allowed text-sm md:text-lg lg:text-xl w-full capitalize rounded-lg bg-pink-500 py-2 lg:py-3 px-6 text-center align-middle font-sans font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      {inCart ? "Remove from cart" : "Add to cart"}
    </button>
  );
};

export default HandleAddToCart;
