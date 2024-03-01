import { useTopDonorCreatorQuery } from "../../../Redux/fetures/clothApi/clothApi";
import DonateCard, { TDonate } from "../../../component/DonateCard/DonateCard";

const DonateLeaderBoard = () => {
  const { data } = useTopDonorCreatorQuery(undefined);
  console.log(data)
  return (
    <div className=" pt-20">
      <table className="min-w-[40%] shadow-md  border mx-auto border-gray-100">
        <thead>
          <tr className="bg-[#333333] text-white">
            <th className="py-3 px-6 text-left border-b">Email</th>
            <th className="py-3 px-6 text-left border-b">Total Donate</th>
          </tr>
        </thead>
        <tbody className="">
          {data?.data?.userEmail?.map((item: TDonate) => (
            <DonateCard Donate={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonateLeaderBoard;
