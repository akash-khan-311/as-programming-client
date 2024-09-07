import ManageCourseForAdmin from "@/components/Dashboard/ManageCourseForAdmin/ManageCourseForAdmin";
import AdminProtectedRoute from "@/ProtectedRoute/AdminProtectedRoute";

const ManageCourseForAdminPage = () => {
  return (
    <>
      <AdminProtectedRoute>
        <ManageCourseForAdmin />
      </AdminProtectedRoute>
    </>
  );
};
export default ManageCourseForAdminPage;
