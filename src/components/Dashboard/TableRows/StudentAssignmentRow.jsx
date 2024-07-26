import { convertTimestampToDate } from "@/lib";
import Image from "next/image";

const StudentAssignmentRow = ({ assignment }) => {
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
          {assignment.mark}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className={`text-white whitespace-no-wrap text-center `}>
          {assignment.feedback}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className={`text-white whitespace-no-wrap text-center `}>
          {formattedDate}
        </p>
      </td>
    </tr>
  );
};
export default StudentAssignmentRow;
