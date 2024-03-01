import { BsArrowRight } from "react-icons/bs";
import img from "../../../../../public/carouselImg/offer.jpg";
import NormalInput from "../../../Form/NormalInput";
import { motion } from "framer-motion";
const SpecialOffer = () => {
  const RotateImg = {
    hidden: { rotate: 180, scale: 0.5, opacity: 0 },
    visible: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 4 } },
  };
  const TextX = {
    hidden: { x: "-200", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 4 } },
  };
  return (
    <div className=" flex flex-col-reverse md:flex-row md:bg-slate-200 md:p-10 font-[Roboto]">
      <motion.div
        variants={TextX}
        initial="hidden"
        animate="visible"
        className=" space-y-4"
      >
        <p className=" md:text-5xl text-3xl font-bold">
          Don't miss out on special offers
        </p>
        <p className=" md:w-[50ch]">
          Register to receive news about the latest, savings combos, discount
          codes...
        </p>
        <div className=" space-y-2">
          <p>
            <span className=" bg-red-200 w-fit px-3 rounded-full">01</span>
            Savings combos
          </p>
          <p>
            <span className=" bg-purple-200 w-fit px-3 rounded-full">02</span>
            Freeship
          </p>
          <p>
            <span className=" bg-red-300 w-fit px-3 rounded-full">03</span>
            Premium magazines
          </p>
        </div>
        <div className=" relative w-72 mx-auto md:mx-0 ">
          <NormalInput type="text" name="Email" className=" " />
          <p className=" absolute top-11 right-3">
            <BsArrowRight className=" bg-red-300  w-8 h-8 rounded-full cursor-pointer p-1" />
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={RotateImg}
        initial="hidden"
        animate="visible"
        className=" mb-10 md:mb-0"
      >
        <img src={img} alt="" />
      </motion.div>
    </div>
  );
};

export default SpecialOffer;
