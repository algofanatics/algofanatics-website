import Signin from "@/components/Auth/Signin/Signin";
import { QueryClient, QueryClientProvider } from "react-query";


const index = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <main>
      <Signin />
    </main>
    </QueryClientProvider>
  );
};

export default index;