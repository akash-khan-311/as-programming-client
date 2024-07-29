"use client";
import { useQuery } from "react-query";
import StudentAssignmentRow from "../TableRows/StudentAssignmentRow";
import { getAssignmentsForStudent } from "@/api/courses";
import useAuth from "@/hooks/useAuth";
import Loader from "@/components/Shared/Loader";

const StudentAssignment = () => {
  const { user } = useAuth();
  // Fetch assignment
  const {
    data: assignments,
    refetch,
    isLoading,
  } = useQuery(
    ["assignments", user?.email],
    async () => await getAssignmentsForStudent(user?.email),
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
                      Name
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
                      Submition Date
                    </th>
                    <th
                      scope="col"
                      className="px-8  font-semibold py-3 text-left text-white uppercase tracking-wider "
                    ></th>
                  </tr>
                </thead>
                <tbody className=" backdrop-blur-sm bg-white/10 divide-y divide-gray-200">
                  {/* Assignment row data */}{" "}
                  {assignments &&
                    assignments.map((assignment) => (
                      <StudentAssignmentRow
                        key={assignment._id}
                        assignment={assignment}
                      />
                    ))}
                </tbody>
              </table>
            ) : (
              <h1 className="text-3xl text-white min-h-[calc(100vh-268px)] md:text-4xl lg:text-5xl flex justify-center items-center text-center py-4">
                No Assignment Details
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentAssignment;
