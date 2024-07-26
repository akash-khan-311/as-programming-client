"use client";
import { convertTimestampToDate } from "@/lib";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Shared/Modal";
const TeacherAssignmentRow = ({ assignment, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenDialog = () => setIsOpen(!isOpen);
  console.log(assignment);
  const formattedDate = convertTimestampToDate(assignment.timestamp);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <Image
                alt="profile"
                src={assignment.courseImg}
                width={100}
                height={100}
                className="mx-auto object-cover rounded h-10 w-15 hidden xl:block"
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-white whitespace-no-wrap ">
              {assignment.courseName}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">
          {assignment.studentName}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">
          {assignment.studentEmail}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">
          {assignment.mark === "pending" ? "Pennding" : `${assignment.mark}/60`}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className={`text-white whitespace-no-wrap text-center `}>
          {assignment.feedback}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className={`text-white whitespace-no-wrap text-center  `}>
          {formattedDate}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <button
          onClick={isOpenDialog}
          className="bg-pink-500 py-1 px-4 rounded-lg text-white hover:bg-pink-600 transition-all duration-200"
        >
          Update
        </button>
      </td>
      <Modal
        assignment={assignment}
        refetch={refetch}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </tr>
  );
};
export default TeacherAssignmentRow;
