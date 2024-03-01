import { VscBracketError } from "react-icons/vsc";

const NotFound = ({ name }: { name: string }) => {
  return (
    <div className=" h-screen flex justify-center items-center font-[Roboto]">
      <div>
        <VscBracketError className=" text-center mx-auto" size={30}/>
        <h1 className=" text-3xl font-semibold text-orange-300 text-center md:mb-6 mt-2">
          Not data Not Found
        </h1>
        <p className=" text-center">{`Your ${name} data not fetched , your ${name} database is empty`}</p>
      </div>
    </div>
  );
};

export default NotFound;
