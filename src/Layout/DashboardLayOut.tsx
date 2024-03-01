import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar/Sidebar";

const DashboardLayOut = () => {
  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-2 bg-black h-screen text-white w-full sticky top-0 left-0">
        <Sidebar />
      </div>
      <div className=" col-span-10 md:p-7 p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayOut;
