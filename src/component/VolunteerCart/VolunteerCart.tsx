/* eslint-disable @typescript-eslint/no-explicit-any */
const VolunteerCart = ({ volunteer }: { volunteer: any }) => {
  return (
    <tr className="hover:bg-gray-50 transition duration-300">
      <td className="py-4 px-6 border-b font-bold ">{volunteer?.Name} </td>
      <td className="py-4 px-6 border-b text-left hover:underline">
        {volunteer?.Email}
      </td>
      <td className="py-4 px-6 border-b text-left hover:underline">
        {volunteer?.Number}
      </td>
      <td className="py-4 px-6 border-b text-left">{volunteer?.Country}</td>
      <td className="py-4 px-6 border-b text-left">{volunteer?.Location}</td>
      <td className="py-4 px-6 border-b text-left">{volunteer?.Subject}</td>
      <td className="py-4 px-6 border-b text-left">
        <img className=" w-8 h-8 rounded-full" src={volunteer?.image} alt="" />
      </td>
    </tr>
  );
};

export default VolunteerCart;
