import { getTotalUsers } from "@/api/api";

const AdminStatistics = async () => {
  const totalUsers = await getTotalUsers();
  const totalAssignment = await totalAssignment();
  console.log(totalUsers);
  return (
    <>
      <div className="">Welcome to AdminStatistics</div>
    </>
  );
};
export default AdminStatistics;
