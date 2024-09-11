import ManageUserForAdmin from "@/components/Dashboard/ManageUseForAdmin/ManageUserForAdmin";
import Loader from "@/components/Shared/Loader";
import AdminProtectedRoute from "@/ProtectedRoute/AdminProtectedRoute";
import { Suspense } from "react";

const ManageUser = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AdminProtectedRoute>
          <ManageUserForAdmin />
        </AdminProtectedRoute>
      </Suspense>
    </>
  );
};
export default ManageUser;
