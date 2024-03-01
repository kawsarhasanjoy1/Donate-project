/* eslint-disable @typescript-eslint/no-explicit-any */
type TButton = {
  HandleToButton?: any;
  className?: string;
  children?: string;
  Icons?: any;
};

const Button = ({ HandleToButton, className, children, Icons }: TButton) => {
  return (
    <button
      onClick={HandleToButton}
      type="submit"
      className={`py-2 md:mt-4 mt-4 px-5 mb-4 shadow-lg before:block before:-left-1 before:-top-1  before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white text-black relative inline-block${className}`}
    >
      {children || <Icons />}
    </button>
  );
};

export default Button;
