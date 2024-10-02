"use client"; // Mark this component as client-side

import Image from "next/image";
import { useState , useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { format } from "date-fns";

const Carousel = ({ teachers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teachers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teachers.length - 1 : prevIndex - 1
    );
  };
  
   // Automatically change slides every 3 seconds (3000ms)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="slider-container  bg-gray p-5 my-5 relative overflow-hidden">
      <div className="swiper-container card-slider relative">
        <div
          className="swiper-wrapper flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Render each teacher as a slide */}
          {teachers?.map((teacher) => {
            const formattedDate = format(new Date(teacher.doj), "dd MMM, yyyy");
            return (
              <div
                key={teacher._id}
                className="swiper-slide w-full flex-shrink-0 flex justify-center items-center"
                style={{ width: "100%" }} // Ensure the slide takes full width
              >
                <div className="card flex justify-center items-center flex-col gap-2">
                  <Image
                    width={100}
                    height={100}
                    className="card-image bg-blend-color-burn rounded-full"
                    src={teacher.img}
                    alt={teacher.name}
                  />
                  <div className="card-body text-center">
                    <p className="testimonial-author text-blue-500 font-bold text-xl">
                      {teacher.name}
                    </p>
                    <p className="italic mb-3">
                      <span>Designation: </span> {teacher.designation}
                    </p>
                    <p className="italic mb-3">
                      <span>Date of Joining: </span> {formattedDate}
                    </p>
                    <p className="italic mb-3">
                      <span>Phone: </span> {teacher.phone}
                    </p>
                    <p className="italic mb-3">
                      <span>Email ID: </span> {teacher.email}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Previous button */}
        <button
          className="swiper-button-prev absolute top-1/2 left-4 rounded-full text-center text-black z-10"
          onClick={prevSlide}
        >
          <FaArrowCircleLeft size={30} />
        </button>

        {/* Next button */}
        <button
          className="swiper-button-next absolute top-1/2 right-4 rounded-full text-center text-black z-10"
          onClick={nextSlide}
        >
          <FaArrowCircleRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
