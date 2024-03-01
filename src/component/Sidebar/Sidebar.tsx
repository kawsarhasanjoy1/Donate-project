import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setIsActive] = useState("");
  const HandleToActive = (e: string) => {
    setIsActive(e);
  };

  return (
    <div className=" font-[Roboto] mt-8 space-y-4">
      <div
        className={`${
          isActive === "/dashboard"
            ? " bg-slate-500 py-1 px-2 w-[95%] mx-auto rounded-md"
            : "hover:bg-slate-400 w-[95%] mx-auto px-2 transition-all rounded-md py-1 truncate"
        }`}
        onClick={() => HandleToActive("chart")}
      >
        <NavLink className={" flex truncate"} to={"/dashboard"}>
          Home
        </NavLink>
      </div>
      <div
        className={`${
          isActive === "add-cloth"
            ? " bg-slate-500 py-1 px-2 w-[95%] mx-auto rounded-md"
            : "hover:bg-slate-400 w-[95%] mx-auto px-2 transition-all rounded-md py-1 truncate"
        }`}
        onClick={() => HandleToActive("add-cloth")}
      >
        <NavLink
          className={" flex truncate"}
          to={"/dashboard/create-winter-clothes"}
        >
          Cloth
        </NavLink>
      </div>
      <div
        className={`${
          isActive === "winter-clothes"
            ? " bg-slate-500 py-1 px-2 w-[95%] mx-auto rounded-md"
            : "hover:bg-slate-400 w-[95%] mx-auto px-2 transition-all rounded-md py-1 truncate"
        }`}
        onClick={() => HandleToActive("winter-clothes")}
      >
        <NavLink className={" flex truncate"} to={"winter-clothes"}>
          Clothes
        </NavLink>
      </div>
      <div
        className={`${
          isActive === "create-testimonial"
            ? " bg-slate-500 py-1 px-2 w-[95%] mx-auto rounded-md"
            : "hover:bg-slate-400 w-[95%] mx-auto px-2 transition-all rounded-md py-1 truncate"
        }`}
        onClick={() => HandleToActive("create-testimonial")}
      >
        <NavLink className={" flex truncate"} to={"create-testimonial"}>
          Testimonial
        </NavLink>
      </div>
      <div
        className={`${
          isActive === "/"
            ? " bg-slate-500 py-1 px-2 w-[95%] mx-auto rounded-md"
            : "hover:bg-slate-400 w-[95%] mx-auto px-2 transition-all rounded-md py-1 truncate"
        }`}
        onClick={() => HandleToActive("/")}
      >
        <NavLink className={" flex truncate"} to={"/"}>
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
