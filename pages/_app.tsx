import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { getCookie } from "cookies-next";
const queryClient = new QueryClient();
type UserInfo = {
  email: string;
  token: string | null;
  username: string;
};
export const userInfoContext = React.createContext<UserInfo | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const userDetails = getCookie("details");
  const details = typeof userDetails === "string" ? JSON.parse(userDetails) : null;
  const [userInformation, setUserInformation] = React.useState(details || null);

  return (
    <userInfoContext.Provider value={userInformation}>
      <div className="font-work">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </userInfoContext.Provider>
  );
}
