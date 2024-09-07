import { getTotalUsers } from "@/api/api";
import Box from "@/components/Shared/Statistics/Box";
import {
  useGetTotalCourses,
  useGetTotalTeachers,
  useGetTotalUsers,
} from "@/hooks";
import { FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const AdminStatistics = async () => {
  const [users, isLoading] = useGetTotalUsers();
  const [courses] = useGetTotalCourses();
  const [teachers] = useGetTotalTeachers();
  if (isLoading) return <div className=""></div>;
  console.log(teachers);
  return (
    <>
      <div className="mt-10 lg:mt-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-14 md:mt-0">
          <Box
            loading={isLoading}
            title="Users"
            value={users || 0}
            icon={FaUsers}
          />
          <Box
            loading={isLoading}
            title="Courses"
            value={courses || 0}
            icon={FaLaptopCode}
          />
          <Box
            loading={isLoading}
            title="Teachers"
            value={teachers || 0}
            icon={FaChalkboardTeacher}
          />
        </div>
      </div>
    </>
  );
};
export default AdminStatistics;
