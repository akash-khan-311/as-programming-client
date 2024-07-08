import { Suspense } from "react";
import RegsiterForm from "../components/RegisterForm/RegisterForm";
import Loader from "../components/Shared/Loader";

const page = () => {
  return (
    <section className="">
      <Suspense fallback={<Loader />}>
        <RegsiterForm />
      </Suspense>
    </section>
  );
};
export default page;
