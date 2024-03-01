import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-around gap-5 bg-sky-200 py-8">
      <div className=" size-28 flex mx-auto">
        <img src="https://i.ibb.co/BctgG6v/logo.png" alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <p>Contact: 005523580235809</p>
        <div className=" flex gap-4">
            <BsGithub/>
            <FaFacebook/>
            <LiaLinkedin/>
        </div>
      </div>
      <nav className="text-lg">
        <ul className="flex h-full flex-wrap items-center justify-center gap-3 text-center">
          <li>
            <Link to={"/"} className="cursor-pointer hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to={"#"} className="cursor-pointer hover:underline">
              Brand logo
            </Link>
          </li>
          <li>
            <Link to={"/clothes"} className="cursor-pointer hover:underline">
              Winter clothes
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="text-center text-sm">
        <p>&copy; 2024 Developed by kawsar hasan joy</p>
      </aside>
    </footer>
  );
};

export default Footer;
