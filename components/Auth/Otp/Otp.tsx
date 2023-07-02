import React from "react";
import Image from "next/image";
import Button from "@/components/Micro/Button/Button";
import Link from "next/link";
import { getCookie } from "cookies-next";
import PinInput from "@/components/Micro/PinInput/PinInput";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Otp = () => {
  const [values, setValues] = React.useState<string>("");
  const OTP = getCookie("token");
  const router = useRouter();

  //endpoint
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const handleVerify = () => {
    if (OTP === values) {
      toast.success("OTP verified successfully!");
      setTimeout(() => {
        router.push("/forgotpassword/otp/resetpassword");
      }, 3000);
    } else {
      toast.error("Invalid OTP code. Please try again.");
    }
  };

  return (
    <main className="font-poppins container mx-auto pt-10 px-6">
      <Link href="/" className="lg:block hidden">
        <Image
          src="/assets/navbar/Logo2.svg"
          alt="logo"
          width={190}
          height={81}
        />
      </Link>

      <Link href="/" className="lg:hidden block">
        <Image
          src="/assets/navbar/Logo2.svg"
          alt="logo"
          width={120}
          height={50}
        />
      </Link>

      <div className="flex lg:flex-row flex-col justify-between">
        <section className="lg:w-5/12 w-full flex-col py-20  lg:h-screen hidden lg:flex">
          <div className="flex lg:items-center items-start lg:pl-5 w-full md:justify-center">
            <div className="flex flex-col justify-center pt-16">
              <h1 className="font-semibold text-5xl">Verify OTP</h1>
              <div className="py-5">
                <p>Enter verification code to verify your account</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end lg:ml-20 w-full pt-14">
            <Image
              src="/assets/signup/signup.svg"
              alt="sign up"
              width={300}
              height={200}
            />
          </div>
        </section>

        <section className="lg:w-5/12 flex flex-col lg:h-screen">
          <div className="lg:max-w-md  max-w-full lg:pt-0 pt-8">
            <h1 className="lg:text-3xl text-2xl font-semibold block">OTP </h1>
            <p className="text-sm w-full text-gray-500 py-6">
              Please enter the verification code sent to s*****@gmail.com
            </p>

            <PinInput
              value={values}
              onChange={(value: string) => setValues(value)}
              length={6}
              className=""
            />

            <Button
              onClick={handleVerify}
              className="bg-grey w-full text-black text-lg font-medium h-16 rounded-full my-10 border-black border hover:bg-btn"
            >
              Continue
            </Button>

            <p className="py-1 flex justify-center text-gray-500">
              Didn’t receive OTP?{" "}
              <span className="text-primary font-bold pl-1">Resend OTP</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Otp;
