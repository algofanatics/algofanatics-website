import { useQuery } from "react-query";
import axios from "axios";

const UseFetch = (endpoint: string, header?: object) => {
  const { isLoading, error, data } = useQuery(
    "data",
    () => axios.get(endpoint, header).then((res) => res.data)
  );
  return {
    isLoading: isLoading,
    error: error,
    data: data,
  };
};

export default UseFetch;
