"use client";
// components/TeacherProtectedRoute.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth"; // Adjust the import path to your actual file
import Loader from "@/app/components/Shared/Loader";

const TeacherProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== "teacher") {
        router.push("/dasboard/profile"); // Redirect to profile if not a teacher
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loader />; // Add your loading spinner here
  }

  if (user && user.role === "teacher") {
    return children;
  }

  router.push("/");
};

export default TeacherProtectedRoute;
