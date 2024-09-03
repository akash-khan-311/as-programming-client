"use client";

import { getAllCourseforAdmin, removeCourse } from "@/api/courses";
import Loader from "@/components/Shared/Loader";
import useRole from "@/hooks/useRole";
import { useMutation, useQuery } from "react-query";
import AdminCourseManageRow from "../TableRows/AdminManageCourseRow";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageCourseForAdmin = () => {
  const [role, isLoading] = useRole();
  const {
    data: courses,
    isLoading: pending,
    refetch,
  } = useQuery({
    queryKey: ["adminCourses"],
    queryFn: async () => await getAllCourseforAdmin(),
    enabled: role === "admin",
    initialData: [],
  });

  const deleteMutation = useMutation(removeCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      toast.success("Course deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete course");
    },
  });

  const handleDeleteCourse = async (courseId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await removeCourse(courseId);
          console.log(result);
          if (result.acknowledged && result.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Course has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting course:", error);
        }
      }
    });
  };

  if (isLoading) return <Loader />;
  if (pending) return <Loader />;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {courses.length ? (
                <table className="min-w-full leading-normal">
                  <thead className="backdrop-blur-lg bg-white/20">
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Course Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Level
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        category
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        price
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        duration
                      </th>

                      <th
                        scope="col"
                        className="px-5  py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        actions
                      </th>
                      <th
                        scope="col"
                        className="px-5  py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="backdrop-blur-sm bg-white/20">
                    {/* User data table row */}
                    {courses &&
                      courses?.map((course) => (
                        <AdminCourseManageRow
                          refetch={refetch}
                          key={course?._id}
                          course={course}
                          handleDeleteCourse={handleDeleteCourse}
                        />
                      ))}
                  </tbody>
                </table>
              ) : (
                <h2 className="text-3xl capitalize md:text-4xl lg:text-5xl flex justify-center items-center text-white min-h-[calc(100vh-200px)]">
                  {courses.message}
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageCourseForAdmin;
