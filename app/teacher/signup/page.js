"use client";

import React from "react";
import Banner from "./../../components/Banner";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      // // Append all form fields to FormData
      Object.keys(data).forEach((key) => {
        if (key !== "img" && data[key]) {
          formData.append(key, data[key]);
        }
      });

      // Upload the image and get the URL
      const imgFile = data.img ? data.img[0] : null; // Assuming img is an array
      if (imgFile) {
        const imgUrl = await uploadImage(imgFile);
        if (imgUrl) {
          formData.append("img", imgUrl); // Append the image URL to form data
        }
      }
      // console.log(formData)
      const response = await fetch("/api/teachers/signup", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const result = await response.json();
      console.log(result);
      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const uploadImage = async (file) => {
    const apiKey = "48375f9530383ab0e1caec5a92e96c8d";
    const formData = new FormData();
    formData.append("image", file); 
    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.success) {
        console.log("Image URL:", result.data.url);
        return result.data.url;
        // Do something with the image URL, e.g., update state or display it
      } else {
        console.error("Upload failed:", result.error.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <Banner
        text={"Teacher Signup"}
        title={"Sign Up"}
        href={"/teacher/signup"}
      />
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        <div className="text-center mb-16">
          <div className="text-center mb-8">
            <div className="border-b-2 border-gray-300 mb-6 inline-block"></div>
            <h2 className="text-3xl font-bold mb-3">Create Account</h2>
            <p className="text-lg mb-3">Create Your Teacher's Account</p>
            <p className="text-base">
              Already Have an Account?{" "}
              <Link
                href={"/teacher/login"}
                className="text-blue-500 hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                First Name
              </label>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
              <input
                {...register("name", { required: "Name is required" })}
                name="name"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <input
                {...register("email", { required: "Email is required" })}
                name="email"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Gender</label>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
              <select
                {...register("gender", { required: "Gender is required" })}
                name="gender"
                id="gender"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Mobile No.
              </label>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be 10 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "Phone number must be 10 digits",
                  },
                })}
                name="phone"
                type="number"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter mobile number"
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Date of Joining
              </label>
              {errors.doj && (
                <p className="text-red-500 text-sm">{errors.doj.message}</p>
              )}
              <input
                {...register("doj", {
                  required: "Date of Joining is required",
                })}
                name="doj"
                type="date"
                id="doj"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Branch</label>
              {errors.branch && (
                <p className="text-red-500 text-sm">{errors.branch.message}</p>
              )}
              <select
                {...register("branch", { required: "Branch is required" })}
                id="branch"
                name="branch"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              >
                <option value="">Select Branch</option>
                <option>Electrical Engineering</option>
                <option>Computer Science & Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
                <option>Metallurgical & Materials Engineering</option>
                <option>Mineral Engineering</option>
                <option>Mining Engineering</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="qualification"
                className="block text-gray-700 mb-2"
              >
                Qualification
              </label>
              {errors.qualification && (
                <p className="text-red-500 text-sm">
                  {errors.qualification.message}
                </p>
              )}

              <input
                {...register("qualification", {
                  required: "Qualification is required",
                })}
                name="qualification"
                type="text"
                id="qualification"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter Your Qualification"
              />
            </div>
            <div>
              <label htmlFor="designation" className="block text-gray-700 mb-2">
                Designation
              </label>
              {errors.designation && (
                <p className="text-red-500 text-sm">
                  {errors.designation.message}
                </p>
              )}

              <input
                {...register("designation", {
                  required: "Designation is required",
                })}
                name="designation"
                type="text"
                id="designation"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter Your Designation"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <input
                {...register("password", { required: "Password is required" })}
                name="password"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Profile Picture
              </label>
              <input
                {...register("img")}
                type="file"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              />
            </div>
          </div>
          <div className="!mt-12">
            <button
              type="submit"
              className="w-full py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
