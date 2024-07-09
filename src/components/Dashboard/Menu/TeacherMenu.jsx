import MenuItem from "../MenuItem/MenuItem";
import { BsGraphUp, BsHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
const TeacherMenu = () => {
  return (
    <>
      <MenuItem label="Statistics" path="/dashboard" icon={BsGraphUp} />
      {/* Menu Items for Teacher */}

      <MenuItem
        label="Add Course"
        path="/dashboard/add-course"
        icon={BsHouseAddFill}
      />
      <MenuItem
        label="My Courses"
        path="/dashboard/my-courses"
        icon={MdHomeWork}
      />
      <MenuItem
        label="Manage Course"
        path="/dashboard/manage-courses"
        icon={MdOutlineManageHistory}
      />
      <MenuItem
        label="Manage Course"
        path="/dashboard/tassignments"
        icon={MdOutlineManageHistory}
      />
    </>
  );
};
export default TeacherMenu;
