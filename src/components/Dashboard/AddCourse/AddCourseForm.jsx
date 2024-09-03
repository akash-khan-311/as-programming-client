"use client";
import React, { useState } from "react";
import { ImSpinner11 } from "react-icons/im";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { imageUpload } from "@/lib";
import { categories } from "@/data/categories";
import Field from "../../Shared/Form/Field";
import useAuth from "@/hooks/useAuth";
import { saveCourse } from "@/api/courses";
// import { revalidatePath } from "next/cache";

const AddCourseForm = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    const title = formData.title;
    const category = formData.category;
    const description = formData.description;
    const price = formData.price;
    const duration = formData.duration;
    const image = formData.image[0];
    const level = formData.level;
    console.log(level);
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    try {
      setLoading(true);
      // Upload image
      const courseImageData = await imageUpload(image);
      const courseImageURL = courseImageData?.data?.display_url;

      // Construct course object
      const course = {
        title,
        category,
        description,
        price,
        duration,
        level,
        img: courseImageURL,
        status: "pending",
        teacher: {
          name: user?.displayName,
          email: user?.email,
          avatar: user?.photoURL,
        },
      };

      // Save course to backend
      const data = await saveCourse(course);
      console.log(data);
      if (data.insertedId) {
        setLoading(false);
        // revalidatePath("/courses", "RootLayout");
        reset();
        toast.success("Course Added Successfully 😍");
      }
      // Reset form after successful submission

      // router.push("/dashboard/my-courses");
    } catch (error) {
      toast.error(error.message);
      console.error("Error saving course:", error);
    } finally {
      setLoading(false);
    }
    // revalidatePath("/courses");
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] md:flex flex-col justify-center items-center p-4 md:p-6 lg:p-10 text-gray-800 rounded-xl backdrop-blur-sm bg-white/10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
        Add Your Course
      </h1>
      <form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
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
                {...register("category", { required: "Category is Required" })}
                className="w-full text-white px-4 py-3 border focus:outline-none rounded-md backdrop-blur-xl bg-white/30"
                name="category"
                id="category"
              >
                <option value="">Select a Category</option>
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
                <option className="text-black" value="">
                  Select a level
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
          </div>
          <div className="space-y-5">
            <Field label={"Course Image"} required={true} error={errors.image}>
              <div
                className={`${
                  errors.image ? "border-red-500" : "border-white"
                } p-7 border backdrop-blur-xl bg-white/30 w-full m-auto rounded-lg`}
              >
                <div className="file_upload p-[17px] relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        {...register("image", {
                          required: "Image is Required",
                        })}
                        className="text-sm cursor-pointer w-full py-20 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        hidden
                      />
                      <div className="bg-pink-700 text-white border border-pink-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-pink-800">
                        Upload Image
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </Field>
            <div className="md:flex flex-col md:flex-row justify-center md:gap-x-10 items-center">
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
  );
};

export default AddCourseForm;
