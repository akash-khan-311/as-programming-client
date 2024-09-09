import Container from "@/components/Shared/Container";
import Image from "next/image";
import Link from "next/link";

const BeInstructor = () => {
  return (
    <section className="">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Image */}
          <div className="border-4 border-pink-500 rounded-md w-full md:w-1/2 overflow-hidden">
            <Image
              src={"/images/instructor.jpg"}
              className="rounded-md hover:scale-105 transition-all duration-300  w-full overflow-hidden"
              width={600}
              height={600}
              alt="Upgrade"
            />
          </div>
          {/* content */}
          <div className="md:w-1/2 w-full space-y-3 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Become a Teacher
            </h1>
            <p>
              Instructors From Around The World Teach Millions Of Learners On
              Online . We Provide Tools And Skills To Teach You Love
            </p>
            <Link className="btn py-2 px-10" href="/teach">
              Start Teaching Today
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default BeInstructor;
