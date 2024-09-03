import Image from "next/image";
import toast from "react-hot-toast";

const CourseDataRow = ({ course }) => {
  const { title, category, img, level, price, duration, status } = course;
  const handleStatus = (status) => {
    if (status === "pending") {
      return toast.success("Wait For The Approval 🙂");
    } else if (status === "Approve") {
      return toast.success("Your Course Live Now ❤️");
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
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
        <p
          onClick={() => handleStatus(status)}
          className={`text-white whitespace-no-wrap text-center capitalize ${
            status === "pending" ? "bg-yellow-700" : "bg-green-700"
          }  cursor-pointer rounded-md`}
        >
          {status}
        </p>
      </td>
    </tr>
  );
};
export default CourseDataRow;
