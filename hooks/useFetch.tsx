import useSWR, {SWRConfiguration} from 'swr'
import axios from 'axios';

const fetcher = async (URL: string) => {
  try {
    const res = await axios.get(URL)
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

const useFetch = (URL: string, configuration?: SWRConfiguration) => useSWR(URL, fetcher, configuration)

export default useFetch;
