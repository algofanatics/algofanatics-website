import React from "react";
import Image from "next/image";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Micro/Button/Button";
import Link from "next/link";

function index() {
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
       
        <section className="lg:w-5/12 w-full flex-col py-20 md:py-0 lg:h-screen hidden lg:flex">
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
              alt="sign up"
              width={300}
              height={200}
            />
          </div>
        </section>

        <section className="lg:hidden block py-10">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Sign in to <span className="font-medium">AlgoFanatics</span>{" "}
          </h1>
          <div className="pt-5 text-sm md:text-base">
            <p>If you don’t have an account register</p>
            <p className="py-2">
              You can{" "}
              <span className="text-primary font-semibold">Register here!</span>
            </p>
          </div>
        </section>

        <section className="lg:w-5/12 flex flex-col lg:h-screen">
          <div className="lg:max-w-sm max-w-full">
            <h1 className="text-3xl py-7 font-medium hidden lg:block">
              Sign up
            </h1>
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

            <Button className="bg-black w-full lg:block hidden text-white font-medium h-16 rounded-lg my-10">
              Sign Up
            </Button>
            <Button className="bg-grey w-full lg:hidden block text-black shadow-lg text-lg font-medium h-16 rounded-full my-10">
              Sign Up
            </Button>
            <p className="flex justify-center text-Text items-center my-4">
              Or continue with
            </p>

            <div className="flex justify-center items-center py-5">
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
