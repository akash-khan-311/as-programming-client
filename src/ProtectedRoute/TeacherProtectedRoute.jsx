"use client";
// components/TeacherProtectedRoute.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth"; // Adjust the import path to your actual file
import Loader from "@/app/components/Shared/Loader";
import useRole from "@/hooks/useRole";

const TeacherProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role] = useRole();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user || role !== "teacher") {
        router.push("/dashboard/profile"); // Redirect to profile if not a teacher
      }
    }
  }, [user, loading, router, role]);

  if (loading) {
    return <Loader />; // Add your loading spinner here
  }

  if (user && role === "teacher") {
    return children;
  }

  router.push("/");
};

export default TeacherProtectedRoute;
