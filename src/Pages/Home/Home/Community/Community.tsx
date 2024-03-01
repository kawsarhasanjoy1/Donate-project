import { FormProvider, useForm } from "react-hook-form";
import Button from "../../../../component/lib/Button";
import Input from "../../../Form/Input";
import { useCommentDonorMutation } from "../../../../Redux/fetures/clothApi/clothApi";

const Community = () => {
  const [addComment, { data, error }] = useCommentDonorMutation();
  const HandleToComment = (e: any) => {
    const comment = e?.Comment;
    addComment(comment);
  };
  console.log(data, error);

  const method = useForm();
  return (
    <div className=" pt-16 w-[40%] mx-auto">
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(HandleToComment)}>
          <Input name="Comment" type="text" />
          <Button
            className=" before:bg-black after:bg-black"
            children="Submit"
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Community;
