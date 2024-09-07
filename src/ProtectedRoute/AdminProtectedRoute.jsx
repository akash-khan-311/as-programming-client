"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Loader from "@/components/Shared/Loader";
import useRole from "@/hooks/useRole";
import toast from "react-hot-toast";

const AdminProtectedRoute = ({ children }) => {
  const [role, roleLoading] = useRole();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !roleLoading) {
      if (!user || role !== "admin") {
        toast.error("You are not authorized to access this page.");
        router.push("/dashboard/profile");
      }
    }
  }, [user, authLoading, role, roleLoading, router]);

  if (authLoading || roleLoading) {
    return <Loader />;
  }

  if (user && role === "admin") {
    return children;
  }

  return null; // Return null if not authorized
};

export default AdminProtectedRoute;
