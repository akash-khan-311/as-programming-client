import MenuItem from "../MenuItem/MenuItem";
import { BsGraphUp, BsHouseAddFill } from "react-icons/bs";
import {
  MdAssignment,
  MdHomeWork,
  MdOutlineManageHistory,
} from "react-icons/md";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const TeacherMenu = () => {
  return (
    <>
      <MenuItem label="Statistics" path="/dashboard" icon={BsGraphUp} />
      {/* Menu Items for Teacher */}

      <MenuItem
        label="Add Course"
        path="/dashboard/add-course"
        icon={BiSolidMessageSquareAdd}
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
        label="Assignments"
        path="/dashboard/tassignments"
        icon={MdAssignment}
      />
    </>
  );
};
export default TeacherMenu;
