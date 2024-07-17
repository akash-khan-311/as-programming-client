import CheckOutPage from "@/components/CheckOut/CheckOutPage";
import Container from "@/components/Shared/Container";
import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";

const page = () => {
  return (
    <section className="">
      <ProtectedRoute>
        <Container>
          <CheckOutPage />
        </Container>
      </ProtectedRoute>
    </section>
  );
};
export default page;
