import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.ibb.co/HVSC59P/Winter-hiking-1200x800.jpg",
      title: "Winter Cloth",
      des: "Where Bargain Hunters Can Shop for Winter Wear in Manila.",
    },
    {
      img: "https://i.ibb.co/Sd5JkhS/children-cloth.jpg",
      title: "Winter Clothes for ice",
      des: "Winter clothes and essentials for cold weather holidays | Honeycombers",
    },
    {
      img: "https://i.ibb.co/YXPccvn/boyclot.jpg",
      title: "Chile clothes",
      des: "Child wearing winter clothes hi-res stock photography and images - Alamy",
    },
    {
      img: "https://i.ibb.co/xHYJQFp/happy-girl-wearing-knit-hat-in-winter-2-ME3-Y68.jpg",
      title: "Women Clothes",
      des: "Woman in winter clothes hi-res stock photography and images - Page 12 - Alamy",
    },
    {
      img: "https://i.ibb.co/2Yk8h06/winter-wardrobe-essentials-Thirdman-via-Pexels-900x643.jpg",
      title: "Boy Clothes",
      des: "Boy in winter clothes hi-res stock photography and images - This best winter clothes in our shop",
    },
  ];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);
  return (
    <>
      <div
        className="h-72 sm:h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear mx-auto"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-white text-center px-5">
          <h1 className="text-xl lg:text-3xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>
      </div>
      {/* slider container */}
      <div className="flex justify-center items-center gap-3 p-2">
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-2 border-black p-px" : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
