"use client";

import AdminStatistics from "@/components/Dashboard/Statistics/AdminStatistics";
import StudentStatistics from "@/components/Dashboard/Statistics/StudentStatistics";
import TeacherStatistics from "@/components/Dashboard/Statistics/TeacherStatistics";
import Loader from "@/components/Shared/Loader";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";

const DasbhboardPage = () => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loader />;
  console.log(role);

  if (role === "admin") return <AdminStatistics />;
  else if (role === "teacher") return <TeacherStatistics />;
  else if (role === "student") return <StudentStatistics />;
};
export default DasbhboardPage;
