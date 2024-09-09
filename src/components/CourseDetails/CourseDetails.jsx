import Container from "@/components/Shared/Container";
import Image from "next/image";
import { MdMarkEmailRead } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import HandleAddToCart from "../HandleAddToCart";
import HandleAddToBookmark from "../handleAddToBookmark";

const CourseDetails = async ({ course }) => {
  const { title, img, description, price, _id, teacher } = course;

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
                <HandleAddToBookmark id={_id} />
                <HandleAddToCart id={_id} />
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
