"use client";
import { useForm } from "react-hook-form";

import Field from "@/components/Shared/Form/Field";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getSingleCourse, updateCourse } from "@/api/courses";
import { useRouter } from "next/navigation";
import Loader from "../../loading";
import { categories } from "@/data/categories";
import { useState } from "react";
import toast from "react-hot-toast";
import { imageUpload } from "@/lib";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

const UpdateCoursePage = ({ params: { id } }) => {
  const { user } = useAuth();
  const [imageUploadLoading, setImageUploadLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [newImage, setNewImage] = useState("");

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setNewImage(e.target.files[0]);
  };
  console.log(newImage);
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { data: course, isLoading } = useQuery(
    ["course", id],
    async () => await getSingleCourse(id),
    {
      enabled: !!id,
      onSuccess: (data) => {
        setValue("title", data.title);
        setValue("category", data.category);
        setValue("level", data.level);
        setValue("price", data.price);
        setValue("duration", data.duration);
        setValue("description", data.description);
        setCurrentImage(data.img);
      },
    }
  );

  const mutation = useMutation(updateCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      toast.success("Course updated successfully");
      router.push("/dashboard/my-courses");
    },
    onError: () => {
      toast.error("Failed to update course");
      setLoading(false);
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const title = data?.title;
    const category = data?.category;
    const description = data?.description;
    const price = data?.price;
    const duration = data?.duration;
    const level = data?.level;
    let imageURL = currentImage;

    const image = newImage;

    if (image) {
      try {
        // Upload image
        setImageUploadLoading(true);
        const courseImageData = await imageUpload(image);
        imageURL = courseImageData?.data?.display_url;
        setImageUploadLoading(false);
      } catch (error) {
        console.error("Image upload error:", error);
        toast.error("Failed to upload image");
        setImageUploadLoading(false);
        setLoading(false);
        return;
      }
    }

    const updatedCourse = {
      title,
      category,
      description,
      price,
      duration,
      level,
      img: imageURL,
      status: "pending",
      teacher: {
        name: user?.displayName,
        email: user?.email,
        avatar: user?.photoURL,
      },
    };

    try {
      await mutation.mutateAsync({ id, course: updatedCourse });
    } catch (error) {
      console.error("Course update error:", error);
      toast.error("Failed to update course");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="mt-10 lg:mt-0 w-full min-h-[calc(100vh-40px)] lg:flex flex-col justify-center items-center p-4 md:p-6 lg:p-10 text-gray-800 rounded-xl backdrop-blur-sm bg-white/10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Update Your Course
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2">
            <div className="space-y-5">
              <Field
                required={true}
                label={"Title"}
                error={errors.title}
                htmlFor={"title"}
              >
                <input
                  {...register("title", { required: "Title is Required" })}
                  name="title"
                  type="text"
                  id="title"
                  placeholder="Course Title"
                  className={`${
                    errors.title ? "border-red-500" : "border-white"
                  } w-full px-4 py-3 text-white border focus:outline-none rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white`}
                />
              </Field>
              <Field
                label={"Course Category"}
                htmlFor={"category"}
                required={true}
                error={errors.category}
              >
                <select
                  {...register("category", {
                    required: "Category is Required",
                  })}
                  className="w-full text-white px-4 py-3 border focus:outline-none rounded-md backdrop-blur-xl bg-white/30"
                  name="category"
                  id="category"
                >
                  <option value={course?.category} className="text-black">
                    {course?.category}
                  </option>
                  {categories.map((category) => (
                    <option
                      className="text-black"
                      value={category.label}
                      key={category.label}
                    >
                      {category.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                label={"Course Level"}
                htmlFor={"level"}
                required={true}
                error={errors.level}
              >
                <select
                  {...register("level", { required: "Level is Required" })}
                  className="w-full text-white px-4 py-3 border focus:outline-none rounded-md backdrop-blur-xl bg-white/30"
                  name="level"
                  id="level"
                >
                  <option className="text-black" value={course?.level}>
                    Selected: {course?.level}
                  </option>
                  <option className="text-black" value="Beginner">
                    Beginner
                  </option>
                  <option className="text-black" value="Intermediate">
                    Intermediate
                  </option>
                  <option className="text-black" value="Advanced">
                    Advanced
                  </option>
                </select>
              </Field>
              <div className="md:flex flex-col md:flex-row justify-center md:gap-x-10 items-center space-y-5 md:space-y-0">
                <Field
                  required={true}
                  label={"Course Price (BDT)"}
                  error={errors.price}
                  htmlFor={"price"}
                >
                  <input
                    {...register("price", {
                      required: "Course Price is Required",
                      valueAsNumber: true,
                      min: {
                        value: 100,
                        message: "Price must be greater than 100",
                      },
                    })}
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                      appearance: "textfield",
                    }}
                    name="price"
                    type="number"
                    id="price"
                    placeholder="Ex: 2000"
                    className="w-full px-4 py-3 text-white border focus:outline-none rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white"
                  />
                </Field>
                <Field
                  required={true}
                  label={"Duration (months)"}
                  error={errors.duration}
                  htmlFor={"duration"}
                >
                  <input
                    {...register("duration", {
                      required: "Duration is Required",
                      valueAsNumber: true,
                      min: {
                        value: 0,
                        message: "Duration must be greater than 0",
                      },
                    })}
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                      appearance: "textfield",
                    }}
                    name="duration"
                    type="number"
                    id="duration"
                    placeholder="Ex: 6"
                    className="w-full px-4 py-3 text-white border focus:outline-none rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white"
                  />
                </Field>
              </div>
            </div>
            <div className="space-y-5">
              <Field
                label={"Course Image"}
                required={true}
                error={errors.image}
              >
                <div
                  className={`${
                    errors.image ? "border-red-500" : "border-white"
                  } p-7 border backdrop-blur-xl bg-white/30 w-full m-auto rounded-lg`}
                >
                  <div className="file_upload p-[17px] relative border-4 border-dotted border-gray-300 rounded-lg">
                    <div className="flex flex-col  mx-auto text-center">
                      <label>
                        <input
                          {...register("image")}
                          className="text-sm cursor-pointer w-full py-20 hidden"
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          hidden
                          onChange={handleChange}
                        />
                        <div className="bg-pink-700 w-full text-white border border-pink-300 rounded font-semibold cursor-pointer  hover:bg-pink-800">
                          {(file || currentImage) && (
                            <Image
                              src={file || currentImage}
                              width={500}
                              height={500}
                              alt="Course Image"
                              className="w-full md:h-56"
                            />
                          )}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </Field>
            </div>
          </div>
          <div className="mt-3">
            <Field
              label={"Description"}
              htmlFor={"description"}
              required={true}
              error={errors.description}
            >
              <textarea
                {...register("description", {
                  required: "Description is Required",
                  minLength: {
                    value: 150,
                    message: "Description must be at least 150 characters",
                  },
                })}
                id="description"
                className={`${
                  errors.description ? "border-red-500" : "border-white"
                } block  focus:rose-300 h-32  w-full px-4 py-3 text-white border focus:outline-none rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white`}
                name="description"
                placeholder="Enter About Your Course"
              ></textarea>
            </Field>
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-pink-700 hover:bg-pink-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </form>
      </div>
    </>
  );
};
export default UpdateCoursePage;
