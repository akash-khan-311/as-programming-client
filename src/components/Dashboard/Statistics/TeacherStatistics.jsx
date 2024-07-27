"use client";

import Box from "@/components/Shared/Statistics/Box";
import { FaLaptopCode } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";
import useGetCourseCount from "@/hooks/useGetCourseCount";
import useGetTeacherEarnings from "@/hooks/useGetTeacherEarnings";
import useGetTotalStudentFotTeacher from "@/hooks/useGetTotalStudentFotTeacher";
import useGetAssignmentCountForTeacher from "@/hooks/useGetAssignmentCountForTeacher";
import EarningsChartForTeacher from "./Teacher/EarningChartForTeacher";

const TeacherStatistics = () => {
  const [courseCount, isLoading] = useGetCourseCount();
  const [totalEarnings] = useGetTeacherEarnings();
  const [studentCount] = useGetTotalStudentFotTeacher();
  const [assignments] = useGetAssignmentCountForTeacher();

  if (isLoading) return <div className="text-7xl text-white">Loading...</div>;
  console.log(assignments);
  const totalCourse = courseCount.courseCount;
  const grandTotalEarnings = totalEarnings?.totalEarnings;
  const totalAssignment = assignments?.assignmentCount;
  const totalStudent = studentCount?.totalStudents;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <Box title="Total Courses" value={totalCourse} icon={FaLaptopCode} />
        <Box title="Total Students" value={totalStudent} icon={PiStudentBold} />
        <Box
          title="Total Assignments"
          value={totalAssignment}
          icon={GiNotebook}
        />
        <Box
          title="Total Earnings"
          value={`৳ ${grandTotalEarnings}`}
          icon={FaMoneyBillWave}
        />
      </div>
      <EarningsChartForTeacher />
    </>
  );
};
export default TeacherStatistics;
