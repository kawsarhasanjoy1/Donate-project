/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../Form/Input";
import Button from "../../../component/lib/Button";
import { useAppSelector } from "../../../Redux/hook";
import { useCreateReviewMutation } from "../../../Redux/fetures/clothApi/clothApi";

const CreateTestimonial = () => {
  const [addReview, { data, error }] = useCreateReviewMutation();
  console.log(data, error);
  const auth: any = useAppSelector((store) => store.auth.user);
  const user = auth?.user;
  const method = useForm();
  const onSubmit = (e: any) => {
    const review = {
      name: user?.name,
      email: user?.email,
      image: user?.image,
      description: e?.Description,
    };
    console.log(review)
    addReview(review);
  };
  return (
    <div className=" md:w-[40%] mx-auto">
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)}>
          <Input name="Description" type="text" />
          <Button
            children="Submit"
            className=" after:bg-black before:bg-black"
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateTestimonial;
