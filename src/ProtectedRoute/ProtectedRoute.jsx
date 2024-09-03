"use client";
// components/ProtectedRoute.js
import { useEffect } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Loader from "@/components/Shared/Loader";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const formattedURL = `/login?redirect=${window.location.pathname.replace(
      "/",
      ""
    )}`;

    if (!loading && !user) {
      toast.error("You must be logged in");
      router.push(formattedURL);
    }
  }, [user, loading, router, pathName]);

  if (loading) {
    return <Loader />;
  }

  return user ? <>{children}</> : router.push("/login");
};

export default ProtectedRoute;
