import { ImFlattr } from "react-icons/im";
import { easeInOut, motion } from "framer-motion";
import img from "../../../../public/carouselImg/men.jpg";

const OverView = () => {
  const Overview = {
    hidden: { opacity: 0, x: "-200px" },
    visible: {
      opacity: 1,
      x: "0",
      transition: { duration: 2, x: { duration: 2 }, opacity: { duration: 3 } },
    },
  };

  const Img = {
    hidden: { y: 0, rotate: 0, x: "-200", opacity: 0 },
    visible: {
      y: 20,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        y: {
          repeat: Infinity,
          duration: 2,
          ease: easeInOut,
          repeatType: "reverse",
        },
        opacity: {
          duration: 4,
        },
        x: {
          duration: 3,
        },
      },
    },
  };

  const planOverview = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 3, opacity: { duration: 4 } },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 overflow-hidden">
      <motion.div
        variants={Img}
        animate="visible"
        initial="hidden"
        className=" relative"
      >
        <img className=" rounded-b-full rounded-t-full " src={img} alt="" />
        <div className="absolute md:top-3 md:right-16 -top-5 right-10 text-yellow-400">
          <ImFlattr size={60} />
        </div>
        <motion.div
          variants={Overview}
          initial="hidden"
          animate="visible"
          className=" bg-yellow-200 shadow-2xl w-fit md:py-14 md:px-8 py-5 space-y-3 rounded-md absolute md:bottom-5 -bottom-5 "
        >
          <p className=" text-xl font-bold">Store goal</p>
          <div className=" flex gap-4">
            <p>Jan</p>
            <p>Feb</p>
            <p>Mar</p>
            <p>Apl</p>
            <p>May</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={planOverview}
        animate="visible"
        initial="hidden"
        className=" space-y-5 "
      >
        <p className=" bg-yellow-100  py-1 rounded-full font-bold text-xl animate-pulse w-fit px-4 mt-10 md:mt-0">
          Store Overview
        </p>
        <p className=" text-4xl font-semibold">
          Plan your store strategy with Our Experts
        </p>
        <p>
          Frosty Threads is a premier winter clothing destination, committed to
          delivering a sophisticated fusion of style and functionality. With a
          meticulous curation of high-quality winter apparel, we aim to
          establish Frosty Threads as the authoritative choice for those seeking
          elevated winter wardrobe solutions.Focused on catering to the
          discerning tastes of urban professionals, winter enthusiasts, and
          fashion aficionados who demand sophistication in their winter
          wardrobe.
        </p>
      </motion.div>
    </div>
  );
};

export default OverView;
