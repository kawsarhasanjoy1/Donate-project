import { useAllClothesQuery } from "../../../Redux/fetures/clothApi/clothApi";
import ClothCart from "../../../component/ClothCart/ClothCart";
import { TCloth } from "../../../type/type";

const AllClothes = () => {
   
  const { data } = useAllClothesQuery(undefined);
  return (
    <div className=" pt-20">
      <div className=" text-center font-[Roboto] ">
        <p className=" text-3xl">Winter Clothes</p>
        <p>
          Jackets or coats with windproof and waterproof features for protection
          against harsh winter weather conditions.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data.map((cart: TCloth) => (
          <ClothCart cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default AllClothes;
