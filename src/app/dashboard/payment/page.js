import PaymentInfo from "@/components/Dashboard/PaymentInfo/PaymentInfo";
import AdminProtectedRoute from "@/ProtectedRoute/AdminProtectedRoute";

const PaymentInfoPage = () => {
  return (
    <>
      <AdminProtectedRoute>
        <PaymentInfo />
      </AdminProtectedRoute>
    </>
  );
};
export default PaymentInfoPage;
