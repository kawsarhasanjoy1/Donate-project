/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useGetReviewQuery } from "../../../../Redux/fetures/clothApi/clothApi";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FcNext, FcPrevious } from "react-icons/fc";

const TestimonialCart = () => {
  const { data } = useGetReviewQuery(undefined);
  const array = data?.data;

  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array?.length - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === array?.length - 2 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <p className=" text-3xl font-semibold font-[Poppins]">Testimonials</p>
        <p className=" text-[20px] font-semibold">see what people are saying</p>
      </div>
      <div className="md:max-w-[70%] min-w-[350px]  mx-auto  flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-2 md:px-16 lg:px-24">
        <div className="relative overflow-hidden">
          <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
            {/* arrow left */}
            <button
              onClick={prevSlider}
              className="flex justify-center items-center hover:bg-white/30 rounded-full w-8 h-8 md:w-8 md:h-8"
            >
              <FcPrevious className=" w-8 h-8 bg-blue-200 rounded-full p-1" />
            </button>
            {/* arrow right */}
            <button
              onClick={nextSlider}
              className="flex justify-center items-center hover:bg-white/30 rounded-full w-8 h-8 md:w-8 md:h-8"
            >
              <FcNext className=" w-8 h-8 bg-blue-200 rounded-full p-1" />
            </button>
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 100 : 100)
              }%)`,
            }}
          >
            {/* sliders */}
            {array?.map((each: any, idx: number) => (
              <div key={idx} className="p-4 min-w-full md:min-w-[100%]">
                <div className="h-full p-10 md:px-20 rounded  relative">
                  <div className="flex">
                    <RiDoubleQuotesL size={20} className=" absolute left-6" />
                    <RiDoubleQuotesR
                      size={20}
                      className=" absolute right-6 bottom-6"
                    />
                  </div>
                  <p className="leading-relaxed mb-6 text-gray-500">
                    {each?.testimonialDescription}
                  </p>
                  <a className="inline-flex items-center justify-center">
                    <img
                      alt="testimonial"
                      src={`https://source.unsplash.com/200x200/?${each.keyWord}`}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center flex justify-center items-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {each.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {each?.description}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCart;
