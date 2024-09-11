"use client";

import AdminStatistics from "@/components/Dashboard/Statistics/AdminStatistics";
import StudentStatistics from "@/components/Dashboard/Statistics/StudentStatistics";
import TeacherStatistics from "@/components/Dashboard/Statistics/TeacherStatistics";
import Loader from "@/components/Shared/Loader";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
import { Suspense } from "react";

const DasbhboardPage = () => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loader />;
  console.log(role);

  if (role === "admin")
    return (
      <Suspense fallback={<Loader />}>
        <AdminStatistics />
      </Suspense>
    );
  else if (role === "teacher")
    return (
      <Suspense fallback={<Loader />}>
        <TeacherStatistics />
      </Suspense>
    );
  else if (role === "student")
    return (
      <Suspense fallback={<Loader />}>
        <StudentStatistics />
      </Suspense>
    );
};
export default DasbhboardPage;
