import Login from "@/components/Login/Login";
import Loader from "@/components/Shared/Loader";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <section>
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    </section>
  );
};
export default LoginPage;
