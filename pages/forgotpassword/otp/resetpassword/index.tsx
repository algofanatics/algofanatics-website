import React from "react";
import Image from "next/image";
import Button from "@/components/Micro/Button/Button";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import UsePost from "@/hooks/post/UsePost";

type Props = {
  password: any;
  tempToken: any;
  email: any;
};

function Index() {
  const [details, setDetails] = React.useState<Props>({
    password: "",
    tempToken: getCookie("token"),
    email: getCookie("email"),
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [password, setPassword] = React.useState("");

  //regrx for password match and email verification
  const numberPattern = /\d/.test(details?.password);
  const letterPattern = /[a-zA-Z]/.test(details?.password);
  const specialCharPattern = /[^a-zA-Z0-9]/.test(details?.password);
  const passCheck = password !== details.password;

  //API Endpoint
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/auth/password";
  const { handlePost } = UsePost(
    details,
    "Password successfully changed!",
    endPoint,
    "/success"
  );

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (
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
              <h1 className="font-semibold text-5xl">Reset Password</h1>
              <div className="py-5">
                <p>
                  password should be unique and strong enough to resist
                  unauthorized access.
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

        <form
          className="lg:w-5/12 flex flex-col lg:h-screen"
          onSubmit={handleReset}
        >
          <div className="lg:max-w-sm  max-w-full lg:pt-0 pt-8">
            <h1 className="lg:text-3xl text-2xl font-semibold block">
              Reset Password{" "}
            </h1>
            <p className="text-sm w-full text-gray-500 py-4">
              Please create a new password for your account using the form below{" "}
            </p>

            <div className="relative">
              <input
                className={`${
                  isSubmitted && passCheck
                    ? "border-danger bg-dangerBackground border-2"
                    : ""
                } bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5 my-5`}
                placeholder="Enter Password"
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

              <Button className="bg-grey w-full  shadow-black text-black shadow-lg text-lg font-medium h-14 rounded-full my-10">
                Continue
              </Button>

              <p className="py-1 flex justify-center text-gray-500">
                Didn’t receive OTP?{" "}
                <span className="text-primary font-bold pl-1">Resend OTP</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Index;
