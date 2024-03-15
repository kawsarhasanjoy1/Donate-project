import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { logOut } from "../../Redux/fetures/authSlice";
import Button from "../../component/lib/Button";
import { toggleDark } from "../../Redux/fetures/darkModeSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const mode = useAppSelector((state) => state.darkMode.mode);

  const HandleHeader = () => {
    setIsOpen(!isOpen);
  };

  const user = useAppSelector((store) => store.auth.token);
  const dispatch = useAppDispatch();

  const HandleToLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className=" z-10 fixed w-full">
      <div className=" flex px-3 text-white font-[Roboto] max-w-[1280px] text-[16px]  bg-[#000000] w-full h-14 mx-auto">
        <div className=" flex items-center">
          <NavLink to={""}>
            <p className=" flex items-center gap-1 text-[32px] font-[Roboto]">
              <p className=" text-xl flex items-center mb-3">Winter</p>
              <img
                className=" flex items-center size-10"
                src="https://i.ibb.co/BctgG6v/logo.png"
                alt=""
              />
            </p>
          </NavLink>
        </div>

        <div className=" w-full  md:z-0 z-20 flex justify-end">
          <div className=" absolute right-2 top-2">
            <span onClick={HandleHeader} className="md:hidden">
              {isOpen ? <AiOutlineClose size={25} /> : <FaBars size={25} />}
            </span>
          </div>
          <div
            className={` md:flex  items-center justify-end  h-14  gap-10 py-2 absolute  md:space-y-0 space-y-4 ${
              isOpen
                ? "bg-[#000000] mt-10 rounded-md z-10 right-0 top-6 w-full h-screen px-5 transition-all delay-1000 duration-500"
                : "-top-[450px] md:top-0  "
            }`}
          >
            <li className="group flex  cursor-pointer flex-col">
              <NavLink to={"/"}>Home</NavLink>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col text-white">
              <NavLink to={"/"}>Brand Logo</NavLink>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <NavLink to={"/clothes"}>Winter Clothes</NavLink>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <NavLink to={"/leaderboard"}>Leader Board</NavLink>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="group flex  cursor-pointer flex-col">
              <NavLink to={"/community"}>Community</NavLink>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <NavLink to={"/about-us"}>About us</NavLink>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          

            {user ? (
              <div className=" md:flex items-center justify-center gap-5">
                <li className="group flex  cursor-pointer flex-col">
                  <NavLink to={"/dashboard"}>Dashboard</NavLink>
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <p>
                  <Button
                    children="LogOut"
                    className=" h-7  flex justify-center items-center"
                    HandleToButton={HandleToLogOut}
                  />
                </p>
              </div>
            ) : (
              <p>
                <NavLink to={"/login"}>Login</NavLink>
              </p>
            )}
              <div>
              <button className=" border border-red-400 px-5 rounded-full hover:bg-red-50 outline-none hover:text-black" onClick={() => dispatch(toggleDark())}>
                {mode ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
