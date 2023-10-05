import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import Button from "@/components/Micro/Button/Button";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import UsePost from "@/hooks/post/UsePost";
import { setCookie } from "cookies-next";
import Logo from "@/components/Logo";

type Props = {
  email: string;
  password: string | number;
};

const Signin = () => {
  const [user, setUser] = React.useState<Props>({
    email: "",
    password: "",
  });

  //API Endpoint
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/auth/login";

  //regex for email verification
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user?.email);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { handlePost } = UsePost(user, "Welcome back!", endPoint, "/admin");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!isValidEmail) {
      toast.warning(" Invalid email address");
    } else {
      handlePost(user);
    }
  };

  return (
    <div className="font-poppins container mx-auto pt-10 px-6">
     <Logo />

      <div className="flex lg:flex-row flex-col lg:justify-between">
        <section className="lg:w-5/12 w-full flex-col py-32 lg:h-screen hidden lg:flex">
          <div className="flex lg:items-center items-start lg:pl-5 w-full lg:justify-center">
            <div className="flex flex-col items-start">
              <h1 className="font-semibold text-5xl ">Sign in to</h1>
              <h1 className="text-3xl font-medium py-3"> Algofanatics</h1>
              <div className=" py-5 ">
                <p className="">If you don’t have an account register.</p>
                <p>
                  You can{" "}
                  <Link href="/signup" className="text-primary font-semibold">
                    Register here!
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end lg:ml-20 w-full pt-10">
            <Image
              src="/assets/signin/signIn.svg"
              alt="code"
              width={330}
              height={230}
            />
          </div>
        </section>

        <section className="lg:hidden block py-12">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Sign in to <span className="font-medium">AlgoFanatics</span>{" "}
          </h1>
          <div className="pt-5 text-sm md:text-base">
            <p>If you don’t have an account register</p>
            <p className="py-2">
              You can You can{" "}
              <Link href="/signup" className="text-primary font-semibold">
                Register here!
              </Link>
            </p>
          </div>
        </section>

        <form className="lg:w-5/12  flex flex-col" onSubmit={handleLogin}>
          <div className="lg:max-w-sm max-w-full">
            <h1 className="text-3xl py-7 font-medium hidden lg:block">
              Sign in
            </h1>
            <input
              className={`${
                isSubmitted && !isValidEmail
                  ? "border-danger bg-dangerBackground border-2"
                  : ""
              } bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5`}
              placeholder="Enter Email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            {isSubmitted && !isValidEmail ? (
              <p className="text-danger text-sm py-2">Invalid email address</p>
            ) : null}

            <div className="relative flex mt-7">
              <input
                className="bg-signin w-full h-16 rounded-lg placeholder:text-signinText px-5"
                placeholder="Password"
                required
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <AiOutlineEyeInvisible className="text-backend" />
              </div>
            </div>
            <Link
              href="/forgotpassword"
              className="flex justify-end text-Text text-sm pt-4"
            >
              Forgot password?
            </Link>

            <button className="bg-black w-full lg:block hidden text-white font-medium h-16 rounded-lg my-10">
              Login
            </button>
            <Button className="bg-grey w-full lg:hidden block  text-black  text-lg font-medium h-16 rounded-full my-10">
              Sign In
            </Button>
            <p className="flex justify-center text-Text items-center">
              Or continue with
            </p>

            <div className="flex justify-center items-center py-5">
              <div className="grid place-items-center grid-cols-3 w-32">
                <BsFacebook className="w-7 h-7 text-blue-600" />
                <div className="bg-black w-7 h-7 flex items-center justify-center rounded-full">
                  <BsApple className="text-white w-4 h-4" />
                </div>
                <FcGoogle className="w-7 h-7" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
