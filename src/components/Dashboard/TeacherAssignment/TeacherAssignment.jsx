"use client";
import { useQuery } from "react-query";
import StudentAssignmentRow from "../TableRows/StudentAssignmentRow";
import { getAssignmentsForTeacher } from "@/api/courses";
import useAuth from "@/hooks/useAuth";
import Loader from "@/components/Shared/Loader";
import TeacherAssignmentRow from "../TableRows/TeacherAssignmentRow";

const TeacherAssignment = () => {
  const { user } = useAuth();
  // Fetch assignment
  const {
    data: assignments,
    refetch,
    isLoading,
  } = useQuery(
    ["assignments", user?.email],
    async () => await getAssignmentsForTeacher(user?.email),
    {
      enabled: !!user?.email, // Only fetch if user email is available
    }
  );
  if (isLoading) {
    return <Loader />;
  }
  console.log(assignments);
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            {assignments.length ? (
              <table className="min-w-full leading-normal">
                <thead className="border-b backdrop-blur-lg bg-white/20">
                  <tr>
                    <th
                      scope="col"
                      className="px-8  font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      Course Info
                    </th>

                    <th
                      scope="col"
                      className="px-8  font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      Student
                    </th>
                    <th
                      scope="col"
                      className="px-8  font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-8  font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      Mark
                    </th>
                    <th
                      scope="col"
                      className="px-8  font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      Feedback
                    </th>
                    <th
                      scope="col"
                      className="px-8 text-center text-sm py-3  text-white uppercase tracking-wider "
                    >
                      submition Date
                    </th>
                    <th
                      scope="col"
                      className="px-8  font-semibold py-3 text-left text-white uppercase tracking-wider "
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody className=" backdrop-blur-sm bg-white/10 divide-y divide-gray-200">
                  {/* Assignment row data */}{" "}
                  {assignments &&
                    assignments.map((assignment) => (
                      <TeacherAssignmentRow
                        key={assignment._id}
                        assignment={assignment}
                        refetch={refetch}
                      />
                    ))}
                </tbody>
              </table>
            ) : (
              <h1 className="text-3xl min-h-[calc(100vh-268px)] text-white md:text-4xl lg:text-5xl flex justify-center items-center text-center py-4">
                No Assignment Found
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeacherAssignment;
