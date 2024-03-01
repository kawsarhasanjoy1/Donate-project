/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useAllClothesQuery,
  useDeleteClothMutation,
} from "../../../Redux/fetures/clothApi/clothApi";
import { TCloth } from "../../../type/type";
import NotFound from "../../../component/NotFoud/NotFound";
import TableCart from "../../../component/Table/TableCart";

const Clothes = () => {
  const { data } = useAllClothesQuery(undefined);
  const [deleteCloth] = useDeleteClothMutation();
  const HandleToDelete = (e: any) => {
    deleteCloth(e);
  };

  return (
    <div>
      {data?.data?.length ? (
        <div className="overflow-x-auto ">
          <div className=" max-w-[90%] mx-auto">
            <p className=" text-xl font-bold">
              {" "}
              Total Clothes{" "}
              <span className=" text-orange-400">{data?.data.length}</span>
            </p>
          </div>
          <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
            <thead>
              <tr className="bg-[#333333] text-white">
                <th className="py-3 px-6 text-left border-b">Title</th>
                <th className="py-3 px-6 text-left border-b">Category</th>
                <th className="py-3 px-6 text-left border-b">Size</th>
                <th className="py-3 px-6 text-left border-b ">Image</th>
                <th className="py-3 px-6  border-b text-left">Action</th>
                <th className="py-3 px-6  border-b">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {data?.data.map((cloth: TCloth) => (
                <TableCart
                  HandleToDelete={HandleToDelete}
                  cloth={cloth}
                  key={cloth?._id}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NotFound name="Cloth" />
      )}
    </div>
  );
};

export default Clothes;
