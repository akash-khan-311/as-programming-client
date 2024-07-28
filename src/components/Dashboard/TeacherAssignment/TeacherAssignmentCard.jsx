"use client";
import { convertTimestampToDate } from "@/lib";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Shared/Modal";
const TeacherAssignmentCard = ({ assignment, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenDialog = () => setIsOpen(!isOpen);
  console.log(assignment);
  const formattedDate = convertTimestampToDate(assignment.timestamp);
  return (
    <div className="backdrop-blur-2xl rounded-lg bg-white/10 ">
      <div className="flex flex-col md:flex-row md:gap-x-5 gap-0 ">
        <div className="md:w-1/3">
          <Image
            src={assignment?.courseImg}
            width={500}
            height={500}
            className="w-full h-full rounded-t-lg md:rounded-l-lg"
            alt={assignment?.courseName}
          />
        </div>

        <div className="w-2/3 p-5 ">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl whitespace-no-wrap ">
            {assignment?.courseName}
          </h2>
          <ul className="text-white space-y-2 my-2">
            <li>Submition Date: {formattedDate}</li>
            <li>Student Email: {assignment?.studentEmail}</li>
            <li>Student Name: {assignment?.studentName}</li>
            <li>
              Comment:{" "}
              {assignment?.feedback ? assignment?.feedback : "Comming Soon"}
            </li>
            <li>
              Mark: {assignment?.mark ? assignment?.mark : "Comming Soon"}
            </li>
            <button
              onClick={isOpenDialog}
              className="bg-pink-500 hidden md:block  mb-5  hover:bg-pink-700 md:w-40 text-white font-bold py-2 px-4 rounded"
            >
              {assignment?.mark > 0 ? "Viewed" : "View"}
            </button>
          </ul>
        </div>
        <button
          onClick={isOpenDialog}
          className="bg-pink-500 md:hidden w-3/4 mx-auto mb-5  hover:bg-pink-700 md:w-40 text-white font-bold py-2 px-4 rounded"
        >
          {assignment?.mark > 0 ? "Viewed" : "View"}
        </button>
      </div>
      <Modal
        assignment={assignment}
        refetch={refetch}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};
export default TeacherAssignmentCard;
