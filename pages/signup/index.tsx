import React from "react";
import Image from "next/image";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

function index() {
  return (
    <main className="font-poppins container mx-auto lg:p-8 p-5 ">
      <Image
        src="/assets/navbar/Logo2.svg"
        alt="logo"
        width={190}
        height={81}
      />

      <div className="flex md:flex-row flex-col justify-between">
        <section className="lg:w-5/12 w-full flex flex-col md:justify-end">
          <div className="flex lg:items-center items-start lg:pl-5 w-full md:justify-center">
            <div className="flex flex-col justify-center md:pt-56 pt-16">
              <h1 className="font-semibold text-5xl">Sign Up to </h1>
              <h1 className="text-3xl font-medium py-3"> Algofanatics</h1>
              <div className=" py-5 ">
                <p className="">If you already have an account </p>
                <p>
                  You can{" "}
                  <span className="text-primary font-semibold">
                    Register here!
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end lg:ml-20 w-full pt-14">
            <Image
              src="/assets/signup/signup.svg"
              alt=""
              width={300}
              height={200}
            />
          </div>
        </section>

        <section className="lg:w-5/12 flex flex-col justify-center h-screen">
          <div className="lg:max-w-sm md:max-w-lg max-w-md">
            <h1 className="text-3xl py-7 font-medium">Sign up</h1>
            <input
              className="bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5"
              placeholder="Enter Email"
            />

            <input
              className="bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5 my-4"
              placeholder="Create User name"
            />
            <input
              className="bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5"
              placeholder="Contact number"
            />

            <div className="relative my-4">
              <input
                className="bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5"
                placeholder=" Password"
              />
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <AiOutlineEyeInvisible className="text-backend" />
              </div>
            </div>

            <div className="relative">
              <input
                className="bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5"
                placeholder="Confrim Password"
              />
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <AiOutlineEyeInvisible className="text-backend" />
              </div>
            </div>

            <button className="bg-black w-full  text-white font-medium h-16 rounded-lg my-4">
              Register
            </button>
            <p className="flex justify-center text-Text items-center my-4">
              Or continue with
            </p>

            <div className="flex justify-center items-center ">
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
}

export default index;
