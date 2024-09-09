"use client";

import { useQuery } from "react-query";
import ManageUserDataRow from "../TableRows/ManageUserDataRow";
import useAuth from "@/hooks/useAuth";
import { getAllUsers } from "@/api/auth";
import Loader from "@/components/Shared/Loader";

const ManageUserForAdmin = () => {
  const { user, loading } = useAuth();
  // const users = await getAllUsers();

  // Fetch all user
  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => await getAllUsers(),
    retry: 2,
  });

  if (isLoading) {
    return <Loader />;
  }

  // Display an error message if there's an issue with fetching
  if (isError) {
    return (
      <div className="flex justify-center items-center flex-col text-2xl md:text-3xl lg:text-4xl text-center text-red-500">
        <p>Failed to load users.</p>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead className="backdrop-blur-lg bg-white/20">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="backdrop-blur-sm bg-white/20">
                {/* User data table row */}
                {users &&
                  users.map((user) => (
                    <ManageUserDataRow
                      refetch={refetch}
                      key={user._id}
                      user={user}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManageUserForAdmin;
