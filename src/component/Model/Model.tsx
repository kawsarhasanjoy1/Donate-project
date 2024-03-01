/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { TCloth } from "../../type/type";

type TModel = {
  openModal: boolean;
  setOpenModal: any;
  details: TCloth;
};

const Model = ({ openModal, setOpenModal, details }: TModel) => {
  const navigate = useNavigate();
  const HandleToBuy = () => {
    navigate("/dashboard");
    setOpenModal(false);
  };

  return (
    <div
      onClick={() => setOpenModal(false)}
      className={`fixed flex justify-center items-center z-[100] ${
        openModal ? "visible opacity-1" : "invisible opacity-0"
      } inset-0 w-full h-full  backdrop-blur-sm bg-black/20 duration-100`}
    >
      <div
        onClick={(e_) => e_.stopPropagation()}
        className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${
          openModal
            ? "scale-1 opacity-1 duration-300 min-w-[320px]"
            : "scale-0 opacity-0 duration-150"
        }`}
      >
        <h1 className="p-2 text-3xl font-semibold">{details?.title}</h1>
        <div className=" flex justify-between">
          <p className="mb-3">{details?.category}</p>
          <p className="mb-3">$500</p>
        </div>
        <div>{details?.description}</div>
        <button
          onClick={HandleToBuy}
          className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full"
        >
          Buy
        </button>
        <button
          onClick={() => setOpenModal(false)}
          className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Model;
