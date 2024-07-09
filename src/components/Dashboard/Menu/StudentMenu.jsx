import MenuItem from "../MenuItem/MenuItem";
import { BsFingerprint, BsGraphUp } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
const StudentMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" path="/dashboard" />
      <MenuItem
        icon={BsFingerprint}
        label="My Courses"
        path="/dashboard/courses"
      />
      <MenuItem
        icon={GrUserAdmin}
        label="Assignments"
        path="/dashboard/sassignments"
      />
      {/* <HostModal
        closeModal={closeModal}
        isOpen={isOpen}
        modalHandler={modalHandler}
      /> */}
    </>
  );
};
export default StudentMenu;
