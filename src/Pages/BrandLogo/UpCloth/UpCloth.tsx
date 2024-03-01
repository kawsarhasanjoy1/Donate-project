/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom";
import NormalInput from "../../Form/NormalInput";
import Button from "../../../component/lib/Button";
import { FieldValues } from "react-hook-form";
import useHostImage from "../../../hook/Host/useHostImage";
import { useUpClothMutation } from "../../../Redux/fetures/clothApi/clothApi";
import { toast } from "sonner";
const UpCloth = () => {
  const clothes = useLoaderData() as any;
  const dataBase = clothes?.data;
  const [upCloth, { data }] = useUpClothMutation();
  console.log(data);
  const HandleTOUpdate = (e: FieldValues) => {
    e.preventDefault();
    const form = e.target;
    const title = form.Title.value;
    const category = form.Category.value;
    const size = form.Size.value;
    const description = form.Description.value;
    const image = form.image.files[0];
    useHostImage(image).then((data) => {
      if (data) {
        const image = data?.display_url;
        const UpCloth = { title, category, size, description, image };
        upCloth({ id: dataBase?._id, data: UpCloth });
        toast.success("Cloth updated successful");
      }
    });
  };

  return (
    <div className="font-[Roboto] space-y-10">
      <p className=" text-2xl font-[Roboto] font-bold">Add Cloth</p>
      <form onSubmit={HandleTOUpdate}>
        <NormalInput cloth={dataBase?.title} name="Title" type="text" />
        <NormalInput cloth={dataBase?.category} name="Category" type="text" />
        <NormalInput cloth={dataBase?.size} name="Size" type="text" />
        <NormalInput
          cloth={dataBase?.description}
          name="Description"
          type="text"
        />
        <NormalInput name="image" type="file" className=" bg-white" />

        <Button
          children="Submit"
          className=" after:bg-black before:bg-black mt-6"
        />
      </form>
    </div>
  );
};

export default UpCloth;
