import { NavLink } from "react-router-dom";
import { TCloth } from "../../type/type";

const ClothCart = ({ cart }: { cart: TCloth }) => {
  return (
    <>
      <div className="max-w-[350px] space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-blue-950 text-white drop-shadow-2xl">
        <img
          alt="Product Image"
          className="w-[350px] h-[275px] object-cover rounded-lg shadow-2xl"
          src={cart?.image}
        />
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold font-[Poppins]">{cart?.title}</h1>

          <div className="text-lg font-semibold flex justify-between">
            <p className="  py-1  hover:text-white duration-300 rounded-full">
              {cart?.size}
            </p>
            <p>{cart?.category}</p>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <NavLink to={`/cloth-details/${cart?._id}`}>
            <button className="px-4 py-2 bg-white hover:bg-slate-300 shadow-2xl text-black border-black border duration-300 rounded-md">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ClothCart;
