import Button from "../../../component/lib/Button";

const Hero = () => {
  return (
    <section className="flex min-h-[700px]  w-full items-center justify-center bg-[#000000] px-8">
      <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
        <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-300">
            Take your clothes business to the next level.
          </h1>
          <p className="lg:text-lg sm:text-base text-sm text-gray-300">
            Track and improve the growth of your business. Send the right
            customers your way with this tool
          </p>
          <div className="flex space-x-4">
            <Button
              children="Get Started"
              className=" before:bg-yellow-500 after:bg-yellow-500 md:font-bold font-[Roboto]"
            />
            <Button
              children="Learn more"
              className=" before:bg-yellow-500 after:bg-yellow-500 md:font-bold font-[Roboto]"
            />
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/HVSC59P/Winter-hiking-1200x800.jpg"
            className="relative md:h-[600px]  sm:h-[500px] h-[300px]   w-[500px] bg-gray-400 rounded-br-[50%] rounded-tl-[50%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
