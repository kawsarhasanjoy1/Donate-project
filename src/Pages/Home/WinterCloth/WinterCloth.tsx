import { NavLink } from "react-router-dom";
import Container from "../../../Containter/Container";
import { useAllClothesQuery } from "../../../Redux/fetures/clothApi/clothApi";
import ClothCart from "../../../component/ClothCart/ClothCart";
import Button from "../../../component/lib/Button";
import { TCloth } from "../../../type/type";

const WinterCloth = () => {
  const { data } = useAllClothesQuery(undefined);
  const cloth = data?.data?.slice(0, 6);

  return (
    <div>
      <div className=" text-center font-[Roboto] mb-6 mt-10">
        <p className=" text-3xl">Winter Clothes</p>
        <p>
          Jackets or coats with windproof and waterproof features for protection
          against harsh winter weather conditions.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {cloth?.map((cart: TCloth) => (
          <ClothCart cart={cart} />
        ))}
      </div>
      <Container>
        <div className=" flex justify-end mt-6">
          <NavLink to={'/clothes'}>
            <Button
              children="View All Button"
              className=" before:bg-black after:bg-black font-[Roboto]"
            />
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default WinterCloth;
