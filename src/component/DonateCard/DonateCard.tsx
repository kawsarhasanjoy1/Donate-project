export type TDonate = {
  _id: string;
  clothCount: number;
};

const DonateCard = ({ Donate }: { Donate: TDonate }) => {
  console.log(Donate);
  return (
    <tr className="hover:bg-gray-50 transition duration-300">
      <td className="py-4 px-6 border-b font-bold hover:underline">{Donate?._id} </td>
      <td className="py-4 px-6 border-b text-left">
        {Donate?.clothCount}
      </td>
    </tr>
  );
};

export default DonateCard;
