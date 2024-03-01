/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDelete } from "react-icons/md";
import { TCloth } from "../../type/type";
import Button from "../lib/Button";
import { TbEdit } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const TableCart = ({
  cloth,
  HandleToDelete,
}: {
  cloth: TCloth;
  HandleToDelete: any;
}) => {
  return (
    <tr className=" transition duration-300 ">
      <td className="px-6 border-b">{cloth?.title} </td>
      <td className="px-6 border-b">{cloth?.category}</td>
      <td className="px-6 border-b">{cloth?.size}</td>
      <td className="px-6 border-b ">
        <img className=" w-10 h-10 rounded-full" src={cloth?.image} alt="" />
      </td>
      <td className="px-6 border-b">
        <Button
          
          HandleToButton={() => HandleToDelete(cloth?._id)}
          Icons={MdDelete}
          className=" before:bg-black after:bg-black"
        />
      </td>
      <NavLink to={`/dashboard/up-clothe/${cloth?._id}`}>
        {" "}
        <td className="px-6 border-b text-end">
          <Button Icons={TbEdit} className=" before:bg-black after:bg-black" />
        </td>
      </NavLink>
    </tr>
  );
};

export default TableCart;
