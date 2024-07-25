"use client";
import { getSingleCourse } from "@/api/courses";
import Field from "@/components/Shared/Form/Field";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

const CourseCard = ({ id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    data: singleCourse,
    refetch,
    isLoading,
  } = useQuery(["course", id], async () => await getSingleCourse(id), {
    enabled: !!id,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
  };

  if (isLoading) {
    return <div className="text-4xl text-white">Course Comming.........</div>;
  }

  return (
    <div className=" mx-auto">
      <div className="flex flex-col  rounded-lg backdrop-blur-md bg-white/20 text-white min-h-52 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:flex-row">
        <Image
          width={300}
          height={300}
          className=" w-1/3 rounded-t-lg object-cover md:!rounded-none md:!rounded-l-lg"
          src={singleCourse.img}
          alt={singleCourse.title}
        />
        <div className="flex justify-center flex-1 flex-col p-6">
          <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-semibold text-blue-gray-900 my-3">
            {singleCourse.title}
          </h2>

          <div className="flex flex-col gap-y-5">
            <button className="w-full transition-all duration-200 bg-pink-600 px-10 py-2 rounded-lg hover:bg-pink-500">
              Continue Course
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full transition-all duration-200 bg-pink-600 px-10 py-2 rounded-lg hover:bg-pink-500"
            >
              Submit Assignment
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setModalOpen(false)}
        className={`z-[999] fixed flex items-center justify-center h-screen w-screen place-items-center ${
          modalOpen ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 bg-black bg-opacity-60 duration-100 `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute m-4 w-3/4 min-w-[60%] max-w-[60%] rounded-lg backdrop-blur-3xl bg-white/30 text-white font-sans text-base font-lightd  ${
            modalOpen
              ? "translate-y-6 opacity-1 duration-300"
              : "-translate-y-6 opacity-0 duration-200"
          } shadow-2xl`}
        >
          <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
            {singleCourse.title}
          </div>
          <div className="relative p-4 font-sans  antialiased font-semibold text-xl leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 ">
            Write Assignment GitHub Repository Link...
          </div>
          <form className="p-5" onSubmit={handleSubmit(submitForm)} action="">
            <Field required={true} error={errors.assignment}>
              <textarea
                {...register("assignment", {
                  required: "Field is Empty",
                  minLength: 20,
                })}
                className={`backdrop-blur-sm bg-white/10 border focus:outline-none p-5 w-full text-lg placeholder:text-white ${
                  !!errors.assignment ? "border-red-500" : "border-white "
                } `}
                name="assignment"
                rows={10}
                id="assignment"
                placeholder="live_link: your_github_repository_url"
              ></textarea>
            </Field>
            <div role="alert" className="text-red-500"></div>
            <button
              className="bg-pink-600 hover:bg-pink-500 w-2/3 mx-auto flex justify-center items-center rounded-lg py-2 mb-10 mt-3"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
