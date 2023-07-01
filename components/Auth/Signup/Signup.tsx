import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Button from "@/components/Micro/Button/Button";
import UsePost from "@/hooks/post/UsePost";

type Props = {
  email: string;
  username: string | number;
  password: any;
};

const Signup = () => {
  const [details, setDetails] = React.useState<Props>({
    email: "",
    username: "",
    password: "",
  });
  //regrx for password match and email verification
  const [password, setPassword] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const numberPattern = /\d/.test(details?.password);
  const letterPattern = /[a-zA-Z]/.test(details?.password);
  const specialCharPattern = /[^a-zA-Z0-9]/.test(details?.password);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details?.email);
  const passCheck = password !== details.password;

  //API Endpoint
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/auth/signup";
  const { handlePost } = UsePost(
    details,
    "Verification mail sent! Please check your inbox",
    endPoint,
    "/signin"
  );

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!isValidEmail) {
      toast.warning(" Invalid email address");
    } else if (
      !numberPattern ||
      !letterPattern ||
      !specialCharPattern ||
      password.length < 8
    ) {
      toast.error(
        "Password must be at least 8 characters and should contain uppercace, special character & number"
      );
    } else if (passCheck) {
      toast.error("Passwords do not match");
    } else {
      handlePost(details);
    }
  };

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
        <section className="lg:w-5/12 w-full flex-col py-20 md:py-0 lg:h-screen hidden lg:flex">
          <div className="flex lg:items-center items-start lg:pl-5 w-full md:justify-center">
            <div className="flex flex-col justify-center md:pt-48 pt-16">
              <h1 className="font-semibold text-5xl">Sign Up to </h1>
              <h1 className="text-3xl font-medium py-3"> Algofanatics</h1>
              <div className=" py-5 ">
                <p className="">If you already have an account </p>
                <p>
                  You can{" "}
                  <Link href="/signin" className="text-primary font-semibold">
                    Login here!
                  </Link>
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
              <Link href="/signin" className="text-primary font-semibold">
                Login here!
              </Link>{" "}
            </p>
          </div>
        </section>

        <section className="lg:w-5/12 flex flex-col lg:h-screen">
          <form className="lg:max-w-sm max-w-full" onSubmit={handleSignUp}>
            <h1 className="text-3xl py-7 font-medium hidden lg:block">
              Sign up
            </h1>
            <input
              className={`${
                isSubmitted && !isValidEmail
                  ? "border-danger bg-dangerBackground border-2"
                  : ""
              } bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5`}
              placeholder="Enter Email"
              required
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            />

            <input
              className="bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5 my-5"
              placeholder="Create username"
              required
              value={details.username}
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
            />
            <input
              className="bg-signup input w-full h-16 rounded-lg placeholder:text-backend px-5"
              placeholder="Contact number"
              required
              type="number"
            />

            <div className="relative">
              <input
                className={`${
                  isSubmitted && passCheck
                    ? "border-danger bg-dangerBackground border-2"
                    : ""
                } bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5 my-5`}
                placeholder="Enter Password"
                type="password"
                required
                value={details.password}
                onChange={(e) => {
                  setDetails({ ...details, password: e.target.value });
                }}
              />
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <AiOutlineEyeInvisible className="text-backend" />
              </div>
            </div>
            {isSubmitted &&
            (!numberPattern || !letterPattern || !specialCharPattern) ? (
              <p className="text-danger text-sm pb-2">
                Your password should contain uppercase, special character, and
                number
              </p>
            ) : null}

            <div className="relative">
              <input
                className={`${
                  isSubmitted && passCheck
                    ? "border-danger bg-dangerBackground border-2 placeholder:text-backend"
                    : ""
                } bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5`}
                placeholder="Confrim Password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <AiOutlineEyeInvisible className="text-backend" />
              </div>
            </div>

            {isSubmitted && passCheck ? (
              <p className="text-danger text-sm py-2">
                Password does not match
              </p>
            ) : null}

            <button className="bg-black w-full lg:block hidden text-white font-medium h-16 rounded-lg my-10">
              Sign Up
            </button>
            <Button className="bg-grey w-full lg:hidden block text-black text-xl font-medium h-16 rounded-full my-10">
              Sign Up
            </Button>
            <p className="flex justify-center text-Text items-center my-4">
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
          </form>
        </section>
      </div>
      <style>
        {`
           input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
  }
        `}
      </style>
    </div>
  );
};

export default Signup;
