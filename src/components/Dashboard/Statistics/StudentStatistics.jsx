import Box from "@/components/Shared/Statistics/Box";
import PieChart from "./student/PieChart";
import { FaLaptopCode } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

import {
  useGetAverageAssignmentMark,
  useGetPurchasedCourseCount,
  useGetSubmittedAssignmentCount,
} from "@/hooks";
import Loader from "@/app/dashboard/loading";

const StudentStatistics = async () => {
  const [courseCount, isLoading] = useGetPurchasedCourseCount();
  const [assignmentCount] = useGetSubmittedAssignmentCount();
  const [averageMark] = useGetAverageAssignmentMark();
  if (isLoading) return <div className=""></div>;
  const totalCourse = parseInt(courseCount?.courseCount);
  const totalAssignment = parseInt(assignmentCount?.assignmentCount);
  const totalAvarageMark = parseInt(averageMark?.averageMark);
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-14 md:mt-0">
          <Box
            title="Course Enrolled"
            value={totalCourse}
            icon={FaLaptopCode}
          />
          <Box
            title="Assignment Submitted"
            value={totalAssignment}
            icon={GiNotebook}
          />
          <Box
            title="Avarage Mark"
            value={totalAvarageMark}
            icon={IoCheckmarkDoneCircle}
          />
        </div>
        <PieChart />
      </div>
    </>
  );
};
export default StudentStatistics;
