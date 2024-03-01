/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { useCreateClothMutation } from "../../../Redux/fetures/clothApi/clothApi";
import Button from "../../../component/lib/Button";
import useHostImage from "../../../hook/Host/useHostImage";
import NormalInput from "../../Form/NormalInput";
import { FieldValues } from "react-hook-form";
import { useAppSelector } from "../../../Redux/hook";
const AddCloth = () => {
  const [createCloth] = useCreateClothMutation();
  const user = useAppSelector((store) => store.auth.user) as any;
  const HandleToSubmitCloth = async (e: FieldValues) => {
    e.preventDefault();
    const form = e.target;
    const title = form.Title.value;
    const category = form.Category.value;
    const size = form.Size.value;
    const description = form.Description.value;
    const image = form.image.files[0];
    const userEmail = user?.user?.email;
    useHostImage(image).then(async (data) => {
      if (data?.display_url) {
        const image = data?.display_url;
        const cloth = { title, category, size, description, image, userEmail };
        const success = await createCloth(cloth).unwrap();

        toast.success(success.message, { duration: 2000 });
      }
    });
  };
  return (
    <div className="font-[Roboto] space-y-10">
      <p className=" text-2xl font-[Roboto] font-bold">Add Cloth</p>
      <form onSubmit={HandleToSubmitCloth}>
        <NormalInput name="Title" type="text" />
        <NormalInput name="Category" type="text" />
        <NormalInput name="Size" type="text" />
        <NormalInput name="Description" type="text" />
        <NormalInput name="image" type="file" className=" bg-white" />

        <Button
          children="Submit"
          className=" after:bg-black before:bg-black mt-6"
        />
      </form>
    </div>
  );
};

export default AddCloth;
