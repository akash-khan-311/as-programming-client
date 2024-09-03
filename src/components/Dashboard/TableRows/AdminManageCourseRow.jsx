import ViewCourseModal from "@/components/Modal/ViewCourseModal";
import Image from "next/image";
import Link from "next/link";

const AdminCourseManageRow = ({ course, handleDeleteCourse, refetch }) => {
  const { title, category, img, level, price, duration, _id, status } = course;

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-white whitespace-no-wrap ">{title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap ">{level}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap ">{category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap ">{price} BDT</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className={`text-white whitespace-no-wrap  `}>{duration} Month</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <button
          onClick={() => handleDeleteCourse(_id)}
          className="bg-red-500 text-white px-4 py-[2px] rounded-md"
        >
          Delete
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <ViewCourseModal course={course} refetch={refetch} />
      </td>
    </tr>
  );
};
export default AdminCourseManageRow;
