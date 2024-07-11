"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";
import { ImSpinner11 } from "react-icons/im";
import Field from "../Shared/Form/Field";
import { categories } from "@/data/categories";
import { useForm } from "react-hook-form";

const AddCourseForm = ({
  handleImageChange,
  loading = false,
  uploadButtonText,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = async (formData) => {};
  return (
    <div className="w-full min-h-[calc(100vh-40px)] md:flex flex-col justify-center items-center p-4 md:p-6 lg:p-10 text-gray-800 rounded-xl backdrop-blur-sm bg-white/10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
        Add Your Course
      </h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2 ">
          <div className="space-y-5">
            <Field
              required={true}
              label={"Title"}
              error={errors.title}
              htmlFor={"name"}
            >
              <div className="space-y-1 text-sm ">
                <input
                  {...register("title", { required: "Title is Required" })}
                  name="title"
                  type="text"
                  id="title"
                  placeholder="Course Title"
                  className="w-full px-4 py-3 text-white border border-pink-500 focus:outline-pink-700 rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white"
                />
              </div>
            </Field>
            <Field
              label={"Courese Category"}
              htmlFor={"category"}
              required={true}
              error={errors.category}
            >
              <div className="space-y-1 text-sm ">
                <select
                  {...register("category", {
                    required: "Category is Required",
                  })}
                  className="w-full text-white px-4 py-3 border border-pink-500 focus:outline-pink-700 rounded-md backdrop-blur-xl bg-white/30"
                  name="category"
                  id="category"
                >
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
              </div>
            </Field>
            <Field
              label={"Course Level"}
              htmlFor={"level"}
              required={true}
              error={errors.category}
            >
              <div className="space-y-1 text-sm ">
                <select
                  {...register("level", {
                    required: "Level is Required",
                  })}
                  className="w-full text-white px-4 py-3 border border-pink-500 focus:outline-pink-700 rounded-md backdrop-blur-xl bg-white/30"
                  name="level"
                  id="level"
                >
                  <option className="text-black" value="">
                    Select a level
                  </option>
                  <option className="text-black" value="beginner">
                    Beginner
                  </option>
                  <option className="text-black" value="intermediate">
                    Intermediate
                  </option>
                  <option className="text-black" value="advanced">
                    Advanced
                  </option>
                </select>
              </div>
            </Field>
          </div>
          <div className="space-y-5 ">
            <Field label={"Course Image"} required={true} error={errors.image}>
              <div className="p-7 backdrop-blur-xl bg-white/30 w-full  m-auto rounded-lg">
                <div className="file_upload p-[17px] relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        onChange={(e) => handleImageChange(e.target.files[0])}
                        className="text-sm cursor-pointer w-full py-20 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        placeholder="Upload image"
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
                label={"Course Price  (BDT)"}
                error={errors.title}
                htmlFor={"name"}
              >
                <div className="space-y-1 text-sm ">
                  <input
                    {...register("price", {
                      required: "Course Price is Required",
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
                    className="w-full px-4 py-3 text-white border border-pink-500 focus:outline-pink-700 rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white"
                  />
                </div>
              </Field>
              <Field
                required={true}
                label={"Duration (month)"}
                error={errors.title}
                htmlFor={"name"}
              >
                <div className="space-y-1 text-sm ">
                  <input
                    {...register("duration", {
                      required: "Duration is Required",
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
                    className="w-full px-4 py-3 text-white border border-pink-500 focus:outline-pink-700 rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white"
                  />
                </div>
              </Field>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Field label={"Description"} htmlFor={"description"} required={true}>
            <div className="space-y-1 text-sm">
              <textarea
                id="description"
                className="block  focus:rose-300 h-32  w-full px-4 py-3 text-white border border-pink-500 focus:outline-pink-700 rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white"
                name="description"
                placeholder="Enter About Your Course"
              ></textarea>
            </div>
          </Field>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-pink-700 hover:bg-pink-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {loading ? (
            <ImSpinner11 className="m-auto animate-spin" size={24} />
          ) : (
            "Save & Continue"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;
