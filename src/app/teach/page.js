import Image from "next/image";

import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";
import Container from "@/components/Shared/Container";
import ApplyForm from "@/components/ApplyForm";

const page = () => {
  return (
    <ProtectedRoute>
      <section className="">
        <Container>
          <div>
            {/* Aply form */}
            <div className="backdrop-blur-lg bg-white/20 p-10 flex justify-center flex-col lg:flex-row items-center gap-x-10">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                className=" rounded-xl  bg-clip-border text-white shadow-none"
              >
                <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normalantialiased">
                  Apply For Teach
                </h4>
                <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                  Enter your details to Apply.
                </p>
                {/* form */}
                <ApplyForm />
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <Image
                  src={
                    "https://varthana.com/school/wp-content/uploads/2022/12/B103.jpg"
                  }
                  width={800}
                  height={600}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </ProtectedRoute>
  );
};
export default page;
