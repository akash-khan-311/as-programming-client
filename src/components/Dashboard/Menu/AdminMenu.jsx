import MenuItem from "../MenuItem/MenuItem";
import { BsGraphUp } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" path="/dashboard" />
      <MenuItem
        icon={FaUserCog}
        label="Manage User"
        path="/dashboard/manage-user"
      />
    </>
  );
};
export default AdminMenu;
