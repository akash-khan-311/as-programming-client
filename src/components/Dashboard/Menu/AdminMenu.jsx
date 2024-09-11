import MenuItem from "../MenuItem/MenuItem";
import { BsGraphUp } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { MdPayment } from "react-icons/md";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" path="/dashboard" />
      <MenuItem
        icon={FaUserCog}
        label="Manage User"
        path="/dashboard/manage-user"
      />
      <MenuItem
        icon={MdManageHistory}
        label="Manage Course"
        path="/dashboard/manage-course"
      />
      <MenuItem
        icon={MdPayment}
        label="Payment Info"
        path="/dashboard/payment"
      />
    </>
  );
};
export default AdminMenu;
