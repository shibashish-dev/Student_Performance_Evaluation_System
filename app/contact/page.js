"use client";
import React from "react";
import Banner from "./../components/Banner";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        reset(); // Reset form after successful submission
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      alert("An error occurred.");
    }
  };
  return (
    <>
      <Banner text={"Contact Us"} title={"contact us"} href={"/contact"} />

      <div className="container mx-auto my-20">
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3 text-center">
            <div className="section-title my-10">
              <p className="mt-3 text-gray-600">
                Any feedback or need any help feel free to contact us!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5">
          <div className="w-full lg:w-3/4 text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex w-full justify-center items-center flex-wrap  mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-3 md:mx-0">
                {errors.name && <span className="text-red-500">Name is required</span>}
                  <input
                    name="name"
                    {...register("name", { required: true })}
                    type="text"
                    className="form-input w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Your Name"
                  />
                   
                </div>
                <div className="w-full md:w-1/2 px-3 mx-3 md:mx-0">
                {errors.email && <span className="text-red-500">Email is required</span>}
                  <input
                    name="email"
                    {...register("email", { required: true })}
                    type="email"
                    className="form-input w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Email Address"
                  />
                </div>
                <div className="w-full px-3 mt-6 mx-3 md:mx-0">
                {errors.message && <span className="text-red-500">Message is required</span>}
                  <textarea
                    name="message"
                    {...register("message", { required: true })}
                    className="form-textarea w-full p-3 border border-gray-300 rounded-lg"
                    rows={8}
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className="w-full px-3 mt-6 text-center mx-3 md:mx-0">
                  <button
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
