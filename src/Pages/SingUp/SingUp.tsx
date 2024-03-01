/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Controller,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { FaUserCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Form/Input";
import { PiPasswordBold } from "react-icons/pi";
import { useCreateUserMutation } from "../../Redux/fetures/auth/authApi";
import { toast } from "sonner";
import Button from "../../component/lib/Button";
import useHostImage from "../../hook/Host/useHostImage";

const SingUp = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const [createUser, { data, error }] = useCreateUserMutation() as any;
  console.log(data, error);
  const onSubmit = async (e: FieldValues) => {
    useHostImage(e?.image).then(async (d) => {
      if (d?.display_url) {
        const Name = e?.Name;
        const Email = e?.Email;
        const Password = e?.Password;
        const Image = d?.display_url;
        const user = { Name, Email, Password, Image };
        console.log(user);
        try {
          await createUser(user);
          toast.success(
            data ? "User crated successful" : error?.data?.message,
            {
              duration: 2000,
              id: toastId,
            }
          );
          navigate("/login");
        } catch (err: any) {
          toast.error(error?.data?.message, { duration: 2000, id: toastId });
          // }
        }
      }
    });
    const toastId = toast.loading("Loading...", { duration: 2000 });
  };

  return (
    <div className=" h-screen flex flex-col justify-center">
      <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="p-12">
            <h1 className="backdrop-blur-sm text-4xl pb-8">Register Now</h1>
            <div className="space-y-5">
              <Input type={"text"} name={"Name"} Icons={FaUserCheck} />
              <Input type={"Email"} name={"Email"} Icons={MdEmail} />
              <Input
                type={"Password"}
                name={"Password"}
                Icons={PiPasswordBold}
              />
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <input
                    value={value?.fileName}
                    {...field}
                    type="file"
                    onChange={(e) => onChange(e.target.files?.[0])}
                  />
                )}
              />
            </div>

            <div>
              <p className=" mt-3">
                Have any account{" "}
                <Link
                  className=" text-yellow-500 font-bold hover:underline transition-all"
                  to={"/login"}
                >
                  Login
                </Link>
              </p>
            </div>

            <Button
              children="Register"
              className="before:bg-black after:bg-black"
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SingUp;
