import { useMutation } from "react-query";
import axios from "axios";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";

const UsePost = (
  user: object,
  success: string,
  endPoint: string,
  route?: string,
  header?: object
) => {
  const postMutation = useMutation((user) =>
    axios.post(endPoint, user, header).then((res) => res.data)
  );

  const handlePost = async (user: any) => {
    try {
      const data = await postMutation.mutateAsync(user);
      toast.success(`${success}`);
      setCookie("details", data?.details);
      localStorage.setItem("details", data?.details);
      setTimeout(() => (route ? (window.location.href = route) : null), 2800);
    } catch (error: any) {
      toast.error(error?.response?.data.responseMessage);
      return error?.response?.data;
    }
  };

  return {
    handlePost,
    isLoading: postMutation.isLoading,
    isError: postMutation.isError,
    error: postMutation.error,
  };
};

export default UsePost;
