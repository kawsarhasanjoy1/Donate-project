/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";

export type TUser = {
  name: string;
  type: string;
  Icons?: any;
  className?: string;
  cloth?: any;
};

const Input = ({ name, type, Icons }: TUser) => {
  return (
    <div className="space-y-5">
      <label htmlFor={name} className="block">
        {name}
      </label>
      <div className="relative">
        <Controller
          name={name}
          render={({ field }) => (
            <input
              required={true}
              {...field}
              id={name}
              type={type}
              placeholder={`Enter your ${name}`}
              className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
            />
          )}
        />
        {Icons && (
          <span className="absolute top-1/4 left-2">
            <Icons size={25} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
