import Signup from "@/components/Auth/Signup/Signup";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const index = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <main>
      <Signup />
    </main>
    </QueryClientProvider>
  );
};

export default index;