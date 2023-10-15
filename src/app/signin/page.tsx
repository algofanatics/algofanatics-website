"use client"
import Signin from '@/layouts/components/Auth/Signin/Signin'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';

const queryClient = new QueryClient();



const page = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Signin/>
      </QueryClientProvider>
    </div>
  )
}

export default page