"use client";
import Signup from "@/layouts/components/Auth/Signup/Signup";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


const page = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Signup />
      </QueryClientProvider>
    </div>
  );
};

export default page;
