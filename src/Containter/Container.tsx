import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className=" w-[99%] md:w-[95%] mx-auto">{children}</div>;
};

export default Container;
