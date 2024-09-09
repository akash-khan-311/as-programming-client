import { deleteAdmission } from "@/api/courses";
import { convertTimestampToDate } from "@/lib";

import Swal from "sweetalert2";

const PaymentInfoRow = ({ info, refetch }) => {
  const admissionsDate = convertTimestampToDate(info.date);
  const handleDeleteAdmission = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteAdmission(id);

          console.log(result);
          if (result.acknowledged && result.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Course has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting course:", error);
        }
      }
    });
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-white whitespace-no-wrap ">{info.email}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">
          {info.paymentStatus === true ? "Paid" : "Unpaid"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">
          {info.transaction_id}
        </p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className={`text-white whitespace-no-wrap text-center `}>
          {admissionsDate}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <button className="text-white px-3 bg-red-500 rounded-xl">
          {info.courseInfo.length}
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <button
          onClick={() => handleDeleteAdmission(info._id)}
          className="text-white px-3 bg-red-500 rounded-xl"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default PaymentInfoRow;
