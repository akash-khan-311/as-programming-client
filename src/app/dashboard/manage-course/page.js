import ManageCourseForAdmin from "@/components/Dashboard/ManageCourseForAdmin/ManageCourseForAdmin";
import Loader from "@/components/Shared/Loader";
import AdminProtectedRoute from "@/ProtectedRoute/AdminProtectedRoute";
import { Suspense } from "react";

const ManageCourseForAdminPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AdminProtectedRoute>
          <ManageCourseForAdmin />
        </AdminProtectedRoute>
      </Suspense>
    </>
  );
};
export default ManageCourseForAdminPage;
