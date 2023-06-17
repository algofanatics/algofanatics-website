import axios from "axios";
import { toast } from "react-toastify";

const UsePost = async (
  user: object,
  success: string,
  endPoint: string,
  route: string
) => {
  try {
    const res = await axios.post(endPoint, user);
    toast.success(`${success}`);
    setTimeout(() => (window.location.href = route), 2800);
  } catch (error: any) {
    toast.error(error?.response?.data.responseMessage);
    return error.response.data;
  }
};

export default UsePost;
