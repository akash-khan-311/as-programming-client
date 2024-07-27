"use client";

import AdminStatistics from "@/components/Dashboard/Statistics/AdminStatistics";
import StudentStatistics from "@/components/Dashboard/Statistics/StudentStatistics";
import TeacherStatistics from "@/components/Dashboard/Statistics/TeacherStatistics";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";

const DasbhboardPage = () => {
  const [role] = useRole();
  console.log(role);

  if (role === "admin") return <AdminStatistics />;
  else if (role === "teacher") return <TeacherStatistics />;
  else if (role === "student") return <StudentStatistics />;
};
export default DasbhboardPage;
