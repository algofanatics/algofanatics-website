import React from "react";
import Image from "next/image";
import Button from "@/components/Micro/Button/Button";
import Link from "next/link";
import UsePost from "@/hooks/UsePost";

function index() {
  //global user object to recover forgotten password
  const [user, setUser] = React.useState({
    email: "",
  });

  //endpoint
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/auth/token";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //post requets to get token
    UsePost(
      user,
      "You are one step away from recovering your password",
      endPoint,
      "/forgotpassword/resetpassword"
    );
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
              <h1 className="font-semibold text-5xl">Forgot Password</h1>
              <div className="py-5">
                <p>If you already have an account </p>
                <p>
                  You can{" "}
                  <span className="text-primary font-semibold">
                    Recover Your Password here!
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
          <form className="lg:max-w-sm max-w-full" onSubmit={handleSubmit}>
            <h1 className="lg:text-3xl text-2xl font-semibold block lg:pt-0 pt-8">
              Forgotten Password{" "}
            </h1>
            <p className="text-sm text-gray-500 py-4">
              Please enter the email assigned to your account for password
              recovery.
            </p>
            <input
              className="bg-signup w-full h-16 rounded-lg placeholder:text-backend px-5"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Button className="bg-grey w-full  shadow-black text-black shadow-lg text-lg font-medium h-16 rounded-full my-10">
              Continue
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default index;
