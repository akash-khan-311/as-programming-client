"use client";
// components/ProtectedRoute.js
import { useEffect } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

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
      router.push(formattedURL);
    }
  }, [user, loading, router, pathName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <>{children}</> : router.push("/login");
};

export default ProtectedRoute;
