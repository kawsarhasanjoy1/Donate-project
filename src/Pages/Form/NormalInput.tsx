import { TUser } from "./Input";

const NormalInput = ({ name, type,  className, cloth }: TUser) => {
  return (
    <div className=" mt-8">
      <label className=" text-xl" htmlFor={name}>
        {name}
      </label>
      <input
        required={true}
        id={name}
        defaultValue={cloth}
        type={type}
        placeholder={`Enter your ${name}`}
        className={`${"p-3 block w-full pl-10 drop-shadow-lg outline-none mt-2"}${className}`}
      />
    </div>
  );
};

export default NormalInput;
