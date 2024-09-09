import Box from "@/components/Shared/Statistics/Box";
import PieChart from "./student/PieChart";
import { FaLaptopCode } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import {
  useGetAverageAssignmentMark,
  useGetPurchasedCourseCount,
  useGetSubmittedAssignmentCount,
} from "@/hooks";

const StudentStatistics = async () => {
  const [courseCount, isLoading] = useGetPurchasedCourseCount();
  const [assignmentCount] = useGetSubmittedAssignmentCount();
  const [averageMark] = useGetAverageAssignmentMark();

  if (isLoading) return <div className=""></div>;
  const totalCourse = parseInt(courseCount?.courseCount);
  const totalAssignment = parseInt(assignmentCount?.assignmentCount);
  const totalAvarageMark = parseInt(averageMark?.averageMark);
  console.log(averageMark);

  return (
    <>
      <div className="mt-10 lg:mt-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-14 md:mt-0">
          <Box
            loading={isLoading}
            title="Course Enrolled"
            value={totalCourse}
            icon={FaLaptopCode}
          />
          <Box
            loading={isLoading}
            title="Assignment Submitted"
            value={totalAssignment}
            icon={GiNotebook}
          />
          <Box
            loading={isLoading}
            title="Avarage Mark"
            value={totalAvarageMark}
            icon={IoCheckmarkDoneCircle}
          />
          <Box
            loading={isLoading}
            title="Grade"
            value={averageMark?.batch}
            icon={SlBadge}
          />
        </div>
        <PieChart />
      </div>
    </>
  );
};
export default StudentStatistics;
