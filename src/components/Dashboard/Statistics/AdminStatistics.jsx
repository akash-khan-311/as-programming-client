import Box from "@/components/Shared/Statistics/Box";
import {
  useGetTotalCourses,
  useGetTotalEarningsForAdmin,
  useGetTotalTeachers,
  useGetTotalUsers,
} from "@/hooks";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const AdminStatistics = () => {
  const [users, isLoadingUsers] = useGetTotalUsers();
  const [courses, isLoadingCourses] = useGetTotalCourses();
  const [teachers, isLoadingTeachers] = useGetTotalTeachers();
  const [earnings, isLoadingEarnings] = useGetTotalEarningsForAdmin();

  // If any of the data is still loading, display a loading indicator
  if (
    isLoadingUsers ||
    isLoadingCourses ||
    isLoadingTeachers ||
    isLoadingEarnings
  ) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-14 md:mt-0 ">
        <div className="mx-auto backdrop-blur-md bg-white/10 w-full flex flex-col items-center space-y-3">
          <span className="flex justify-center items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          </span>
          <div className="mt-3 space-y-2">
            <div className="w-20 h-10 bg-gray-300 animate-pulse"></div>
            <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <div className="mx-auto backdrop-blur-md bg-white/10 w-full flex flex-col items-center space-y-3">
          <span className="flex justify-center items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          </span>
          <div className="mt-3 space-y-2">
            <div className="w-20 h-10 bg-gray-300 animate-pulse"></div>
            <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <div className="mx-auto backdrop-blur-md bg-white/10 w-full flex flex-col items-center space-y-3">
          <span className="flex justify-center items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          </span>
          <div className="mt-3 space-y-2">
            <div className="w-20 h-10 bg-gray-300 animate-pulse"></div>
            <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <div className="mx-auto backdrop-blur-md bg-white/10 w-full flex flex-col items-center space-y-3">
          <span className="flex justify-center items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          </span>
          <div className="mt-3 space-y-2">
            <div className="w-20 h-10 bg-gray-300 animate-pulse"></div>
            <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  console.log(earnings);

  return (
    <div className="mt-10 lg:mt-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-14 md:mt-0">
        <Box
          loading={isLoadingUsers}
          title="Users"
          value={users || 0}
          icon={FaUsers}
        />
        <Box
          loading={isLoadingCourses}
          title="Courses"
          value={courses || 0}
          icon={FaLaptopCode}
        />
        <Box
          loading={isLoadingTeachers}
          title="Teachers"
          value={teachers || 0}
          icon={FaChalkboardTeacher}
        />
        <Box
          loading={isLoadingTeachers}
          title="Earn"
          value={`${earnings?.totalEarnings || 0} ৳`}
          icon={FaMoneyBillWave}
        />
      </div>
    </div>
  );
};

export default AdminStatistics;
