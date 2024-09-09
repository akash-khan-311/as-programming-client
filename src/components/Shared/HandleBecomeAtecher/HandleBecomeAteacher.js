import { useState } from "react";
import Swal from "sweetalert2";

const HandleBecomeAteacher = ({ style, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  if (isOpen === true) {
    Swal.fire({
      title: "Are you sure?",
      text: "Your Course , mark, and your Grade Will be remove",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#db2777",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Request Sent Successfully",
          text: "Admin Will call you for the Interview.",
          icon: "success",
        });
      }
    });
  }
  return (
    <>
      <button onClick={handleOpenModal} className={style}>
        {label}
      </button>
    </>
  );
};
export default HandleBecomeAteacher;
