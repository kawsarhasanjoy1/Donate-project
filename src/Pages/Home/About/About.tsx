import img from "../../../../public/carouselImg/children cloth.jpg";
import img1 from "../../../../public/carouselImg/Winter-hiking-1200x800.jpg";
import Button from "../../../component/lib/Button";
const About = () => {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 font-[Roboto] md:gap-7">
      <div className=" relative">
        <img
          className=" mx-auto md:h-96 rounded-md shadow-2xl "
          src={img}
          alt=""
        />
        <img className=" md:size-44 size-24 object-cover absolute -bottom-3 right-28 md:right-60  border-2" src={img1} alt="" />
      </div>
      <div>
        <p className=" text-4xl mb-3 mt-6 md:mt-0">About Us</p>
        <p className=" md:text-4xl text-2xl mb-3">
          Innovative Business Solutions for Financial winter cloth shop
        </p>
        <p>
          {" "}
          Cloth specializes in the effective and efficient management of winter
          clothes distribution. We work tirelessly to gather and distribute
          quality winter garments, including coats, jackets, hats, gloves, and
          more, to individuals and communities facing winter-related challenges.
          Our commitment extends beyond providing physical warmth; we aim to
          create a sense of comfort and hope for a better tomorrow.
        </p>
        <div className=" flex gap-3 mt-5 justify-center md:justify-start">
          <Button
            children="Get Started"
            HandleToButton={""}
            className=" after:bg-black before:bg-black"
          />
          <Button
            children="Learn morel"
            HandleToButton={""}
            className=" after:bg-black before:bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
