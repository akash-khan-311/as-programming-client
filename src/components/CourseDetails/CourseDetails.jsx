import Container from "@/components/Shared/Container";
import Image from "next/image";
import { MdMarkEmailRead } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
const CourseDetails = ({ course }) => {
  const { title, category, img, description, price, duration, teacher } =
    course;
  return (
    <section className="">
      <Container>
        <div className="backdrop-blur-md bg-white/20 p-6 w-full lg:max-w-screen-xl mx-auto rounded-lg">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10">
            Course Details
          </h2>
          <div className="text-white w-full flex flex-col lg:flex-row md:justify-between  items-center gap-x-4 space-y-10 lg:space-y-0">
            <div className="flex flex-col text-gray-700 bg-white shadow-md md:w-96 w-full  rounded-xl bg-clip-border">
              <div className="relative h-56   overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <Image fill src={img} alt={title} layout="fill" />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl md:text-2xl lg:text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Price: ৳{price}
                </h5>
              </div>
              <div className="p-6 pt-0 w-full">
                <button
                  className="select-none text-sm md:text-lg lg:text-xl w-full capitalize rounded-lg bg-pink-500 py-2 lg:py-3  px-6 text-center align-middle font-sans font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Enroll Course
                </button>
                <button
                  className="select-none mt-4 text-sm md:text-lg lg:text-xl w-full capitalize rounded-lg bg-pink-500 py-2 lg:py-3 px-6 text-center align-middle font-sans font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Add To Bookmark
                </button>
              </div>
            </div>
            <div className="space-y-4 flex-1 ">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-left">
                {title}
              </h2>
              <p className="text-center lg:text-left">{description}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-start mx-auto md:mx-0 items-start">
                  <p className="flex items-center gap-x-3 text-xl">
                    <GiTeacher /> Instructor Name : {teacher.name}
                  </p>
                  <p className="flex items-center gap-x-3 text-xl">
                    <MdMarkEmailRead /> Instructor Email : {teacher.email}
                  </p>
                </div>
                <div>
                  {/* <img
                    className="h-36 w-36 rounded-full"
                    src={instructorImage ? instructorImage : demoImg}
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default CourseDetails;
