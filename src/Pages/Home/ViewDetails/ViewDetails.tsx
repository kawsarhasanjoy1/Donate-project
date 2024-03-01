/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Model from "../../../component/Model/Model";

const ViewDetails = () => {
  const data = useLoaderData() as any;
  const [openModal, setOpenModal] = useState(false);

  const details = data?.data;
  return (
    <div>
      <div className=" grid md:grid-cols-2 md:pt-24 mx-auto md:gap-32 font-[Roboto] px-2 pt-16">
        <div>
          <img
            className=" md:w-[98%] w-[95%] rounded-md mx-auto md:mx-0"
            src={details?.image}
            alt=""
          />
        </div>
        <div className=" space-y-6">
          <p className=" text-2xl">{details?.title}</p>
          <p className=" text-xl">{details?.size}</p>
          <p className=" text-xl">{details?.category}</p>
          <p className=" text-xl">{details?.description}</p>
          <div>
            <div className=" mx-auto flex  ">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-gray-700 text-white p-2 rounded-lg"
              >
                Donate Now Button
              </button>
              <Model
                openModal={openModal}
                setOpenModal={setOpenModal}
                details={details}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
