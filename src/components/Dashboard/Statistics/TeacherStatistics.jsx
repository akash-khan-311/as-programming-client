"use client";

import Box from "@/components/Shared/Statistics/Box";
import { FaLaptopCode } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";

import EarningsChartForTeacher from "./Teacher/EarningChartForTeacher";
import Loader from "@/components/Shared/Loader";
import {
  useGetAssignmentCountForTeacher,
  useGetCourseCount,
  useGetTeacherEarnings,
  useGetTotalStudentFotTeacher,
} from "@/hooks";

const TeacherStatistics = () => {
  const [courseCount, isLoading] = useGetCourseCount();
  const [totalEarnings] = useGetTeacherEarnings();
  const [studentCount] = useGetTotalStudentFotTeacher();
  const [assignments] = useGetAssignmentCountForTeacher();

  if (isLoading) return <Loader />;

  const totalCourse = courseCount.courseCount;
  const grandTotalEarnings = totalEarnings?.totalEarnings;
  const totalAssignment = assignments?.assignmentCount;
  const totalStudent = studentCount?.totalStudents;

  return (
    <div className="mt-10 lg:mt-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-14 md:mt-0">
        <Box title="Total Courses" value={totalCourse} icon={FaLaptopCode} />
        <Box title="Total Students" value={totalStudent} icon={PiStudentBold} />
        <Box
          loading={isLoading}
          title="Total Assignments"
          value={totalAssignment}
          icon={GiNotebook}
        />
        <Box
          loading={isLoading}
          title="Total Earnings"
          value={`৳ ${grandTotalEarnings}`}
          icon={FaMoneyBillWave}
        />
      </div>
      <EarningsChartForTeacher />
    </div>
  );
};
export default TeacherStatistics;
