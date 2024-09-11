import PaymentInfo from "@/components/Dashboard/PaymentInfo/PaymentInfo";
import Loader from "@/components/Shared/Loader";
import AdminProtectedRoute from "@/ProtectedRoute/AdminProtectedRoute";
import { Suspense } from "react";

const PaymentInfoPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AdminProtectedRoute>
          <PaymentInfo />
        </AdminProtectedRoute>
      </Suspense>
    </>
  );
};
export default PaymentInfoPage;
