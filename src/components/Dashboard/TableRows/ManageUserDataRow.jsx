"use client";

import { updateUserRole } from "@/api/auth";
import UpdateUserModal from "@/components/Modal/UpdateUserModal";
import { useState } from "react";

const ManageUserDataRow = ({ user, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = async (role) => {
    try {
      const data = await updateUserRole(user?.email, role);
      console.log(data);
      refetch();
    } catch (error) {
      console.log(error);
    } finally {
      setIsOpen(false);
    }
  };
  return (
    <>
      <tr>
        <td className=" px-5 py-5 border-b border-gray-200  text-sm">
          <p className="text-white whitespace-no-wrap">{user?.email}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200  text-sm">
          <p className="text-white whitespace-no-wrap uppercase">
            {user?.role}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200  text-sm">
          {user?.status ? (
            <p
              className={`${
                user.status === "verified"
                  ? "text-green-300"
                  : "text-yellow-600"
              } whitespace-no-wrap`}
            >
              {user.status.toUpperCase()}
            </p>
          ) : (
            <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
          )}
        </td>

        <td className="px-5 py-5 border-b border-gray-200  text-sm">
          <span
            onClick={() => setIsOpen(true)}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-600 opacity-50 rounded-full"
            ></span>
            <span className="relative">Update Role</span>
          </span>
          {/* Modal */}
          <UpdateUserModal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            user={user}
            modalHandler={modalHandler}
          />
        </td>
      </tr>
    </>
  );
};
export default ManageUserDataRow;
