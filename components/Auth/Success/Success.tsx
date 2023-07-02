import React from "react";
import Image from "next/image";
import Button from "@/components/Micro/Button/Button";
import Link from "next/link";

const Success = () => {
  return (
    <div className="font-poppins container mx-auto pt-10 px-6">
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
              <h1 className="font-semibold text-5xl">Successful</h1>
              <div className="py-5">
                <p>Password reset Successful</p>
                <p>
                  You can{" "}
                  <span className="text-primary font-bold cursor-pointer">
                    <Link href="/signin">Login here !</Link>
                  </span>
                </p>
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
          <div className="lg:max-w-sm  max-w-full lg:pt-0 pt-8">
            <h1 className="lg:text-3xl text-2xl font-semibold block">
              Successful{" "}
            </h1>
            <p className="text-sm w-full text-gray-500 py-4">
              Password reset successful. Please continue to login{" "}
            </p>

            <Link href="/signin" legacyBehavior>
              <Button className="bg-grey w-full text-black text-lg font-medium h-14 rounded-full my-4 border-black border hover:bg-btn">
                Continue
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Success;
