import CartList from "@/components/Cart/CartList";
import Container from "@/components/Shared/Container";
import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";

const CartPage = () => {
  return (
    <>
      <>
        <ProtectedRoute>
          <Container>
            <CartList />
          </Container>
        </ProtectedRoute>
      </>
    </>
  );
};
export default CartPage;
