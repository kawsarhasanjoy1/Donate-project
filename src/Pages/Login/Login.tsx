/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import Input from "../Form/Input";
import { FaUserCheck } from "react-icons/fa";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { PiPasswordBold } from "react-icons/pi";
import { useLoginUserMutation } from "../../Redux/fetures/auth/authApi";
import verifyToken from "../../utils/VerifyToken";
import { toast } from "sonner";
import { useAppDispatch } from "../../Redux/hook";
import { setUser } from "../../Redux/fetures/authSlice";
import Button from "../../component/lib/Button";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const methods = useForm();
  const [login] = useLoginUserMutation();

  const onSubmit = async (e: FieldValues) => {
    const toastId = toast.loading("Loading...", { duration: 2000 });
    try {
      const res = await login(e).unwrap();
      const user = verifyToken(res?.token);
      dispatch(setUser({ user: user, token: res?.token }));
      toast.success("User login successful", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (err: any) {
      toast.error(err?.data?.message, { duration: 2000, id: toastId });
    }
  };
  return (
    <div className=" h-screen flex flex-col justify-center">
      <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="p-12">
            <h1 className="backdrop-blur-sm text-4xl pb-8">Login</h1>
            <Input name="Email" type="email" Icons={FaUserCheck} />
            <Input name="Password" type="password" Icons={PiPasswordBold} />

            <div>
              <p className=" mt-3">
                Do you new{" "}
                <Link
                  className=" text-yellow-500 font-bold hover:underline transition-all"
                  to={"/singUp"}
                >
                  Create account
                </Link>
              </p>
            </div>

            {/* <button
              type="submit"
              className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
            >
              Submit
            </button> */}
            <Button
              className=" before:bg-black after:bg-black"
              children="Login"
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Login;
