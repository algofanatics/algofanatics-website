"use client";
import Signin from "@/layouts/components/Auth/Signin/Signin";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const page = () => {
  const queryClient = new QueryClient();

 
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Signin  />
      </QueryClientProvider>
    </div>
  );
};

export default page;
