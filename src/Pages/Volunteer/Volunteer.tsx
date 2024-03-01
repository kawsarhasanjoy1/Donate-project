/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Input from "../Form/Input";
import Button from "../../component/lib/Button";
import { useAppSelector } from "../../Redux/hook";
import {
  useCreateVolunteerMutation,
  useGetAllVolunteerQuery,
} from "../../Redux/fetures/clothApi/clothApi";
import { toast } from "sonner";
import VolunteerCart from "../../component/VolunteerCart/VolunteerCart";

const Volunteer = () => {
  const data: any = useAppSelector((store) => store.auth.user);
  const [addVolunteer] = useCreateVolunteerMutation();
  const { data: volunteer } = useGetAllVolunteerQuery(undefined);
  const image = data?.user?.image;
  const method = useForm();
  const onSubmit = (e: FieldValues) => {
    const volunteer = {
      ...e,
      image: image,
    };
    addVolunteer(volunteer).then((data: any) => {
      if (data?.data?.success) {
        toast.success("Volunteer created successful");
      }
    });
  };
  console.log(volunteer);
  return (
    <div className=" pt-16 w-full md:w-[90%] mx-auto">
      <div>
        <p className=" text-3xl mt-6 mb-10">Our volunteers</p>
        <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100">
          <thead>
            <tr className="bg-[#333333] text-white">
              <th className="py-3 px-6 text-left border-b">Name</th>
              <th className="py-3 px-6 text-left border-b">Email</th>
              <th className="py-3 px-6 text-left border-b">Contact</th>
              <th className="py-3 px-6 text-left border-b">Country</th>
              <th className="py-3 px-6 text-left border-b">Location</th>
              <th className="py-3 px-6 text-left border-b">Subject</th>
            </tr>
          </thead>
          <tbody className="">
            {volunteer?.data?.map((item: any) => (
              <VolunteerCart volunteer={item} />
            ))}
          </tbody>
        </table>
      </div>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)}>
          <p className=" text-3xl mt-9 mb-9">Create Volunteer</p>
          <div className=" md:grid md:grid-cols-2 gap-8 w-full">
            <div>
              <Input name="Name" className=" w-full" type="text" />
              <Input name="Email" type="text" />
              <Input name="Number" type="text" />
            </div>

            <div>
              <Input name="Country" type="text" />
              <Input name="Location" type="text" />
              <Input name="Subject" type="text" />
            </div>
          </div>

          <Button
            className=" before:bg-black after:bg-black"
            children="Submit"
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Volunteer;
