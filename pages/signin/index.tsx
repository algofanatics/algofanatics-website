import React from "react";
import Image from "next/image";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const index = () => {
  return (
    <main className="font-poppins container mx-auto lg:p-8 p-5 ">
      <Image
        src="/assets/navbar/Logo2.svg"
        alt="logo"
        width={190}
        height={81}
      />

      <div className="flex md:flex-row flex-col justify-between">
        <section className="lg:w-5/12 w-full flex flex-col md:justify-end py-20 md:py-0 md:h-screen">
          <div className="flex lg:items-center items-start lg:pl-5 w-full lg:justify-center">
            <div className="flex flex-col items-start">
              <h1 className="font-semibold text-5xl ">Sign in to</h1>
              <h1 className="text-3xl font-medium py-3"> Algofanatics</h1>
              <div className=" py-5 ">
                <p className="">If you don’t have an account register.</p>
                <p>
                  You can{" "}
                  <span className="text-primary font-semibold">
                    Register here!
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end lg:ml-20 w-full pt-10">
            <Image
              src="/assets/signin/signIn.svg"
              alt=""
              width={330}
              height={230}
            />
          </div>
        </section>

        <section className="lg:w-5/12 flex flex-col">
          <div className="lg:max-w-sm md:max-w-lg max-w-md">
            <h1 className="text-3xl py-7 font-medium">Sign in</h1>
            <input
              className="bg-signin w-full h-16 rounded-lg placeholder:text-signinText px-5"
              placeholder="Enter email or user name"
            />

            <div className="relative flex mt-7">
            <input
              className="bg-signin w-full h-16 rounded-lg placeholder:text-signinText px-5"
              placeholder="Password"
            />
               <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <AiOutlineEyeInvisible className="text-backend" />
              </div>
             </div>

            <p className="flex justify-end text-Text text-sm pt-4">
              Forgot password?
            </p>
            <button className="bg-black w-full  text-white font-medium h-16 rounded-lg my-8">
              Login
            </button>
            <p className="flex justify-center text-Text items-center">
              Or continue with
            </p>
            <div className="flex justify-center items-center py-4 ">
              <div className="flex justify-between w-28">
                <BsFacebook className="w-7 h-7 text-blue-600" />
                <div className="bg-black w-7 h-7 flex items-center justify-center rounded-full">
                  <BsApple className="text-white w-4 h-4" />
                </div>
                <FcGoogle className="w-7 h-7" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default index;
