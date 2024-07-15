import Image from "next/image";

const CourseManageRow = ({ course }) => {
  const { title, category, img, level, price, duration } = course;
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <Image
                alt="profile"
                src={img}
                width={100}
                height={100}
                className="mx-auto object-cover rounded h-10 w-15 hidden xl:block"
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-white whitespace-no-wrap ">{title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">{level}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">{category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">{price} BDT</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className={`text-white whitespace-no-wrap text-center `}>
          {duration} Month
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <button
          className={`text-green-500 px-2 py-1 bg-white rounded-md whitespace-no-wrap text-center `}
        >
          Update
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <button
          className={`text-red-500 px-2 py-1 bg-white rounded-md whitespace-no-wrap text-center `}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default CourseManageRow;
