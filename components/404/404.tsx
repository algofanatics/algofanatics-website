import React from "react";
import Image from "next/image";
import Button from "../Micro/Button/Button";
import Router, { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto md:p-8 p-5">
      <nav>
        <Image
          src="/assets/navbar/Logo2.svg"
          alt="lost image"
          width={153}
          height={65}
        />
      </nav>
      <div className="flex flex-col justify-center items-center min-h-[80vh]">
        <Image
          src="/assets/404/404.svg"
          alt="lost image"
          width={819}
          height={505}
          className="w-96 h-52 md:w-[819px] md:h-[505px]"
        />
        <div className="text-grayBlack py-2 font-light md:text-xl text-sm">
          <p>Sorry...</p>
          <p className="py-1">This page you requested for was not found</p>
        </div>
        <div className="py-6 md:text-xl">
          <Button
            className="bg-grey md:h-14 md:w-64 w-28 h-9  rounded-full shadow-lg shadow-black"
            onClick={() => router.back()}
          >
            Go back
          </Button>

          <Button className="md:ml-10 ml-6 " onClick={() => router.push("/")}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
