import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-black py-3 ">
      <div className="container mx-auto flex lg:px-8 px-5 justify-between items-center text-white">
        <div>
          <Link href="/">
          <Image
            src="/assets/navbar/Logo.svg"
            alt=""
            width={153}
            height={65}
            className="hidden lg:block cursor-pointer"
          />
          </Link>
          <div className="lg:hidden flex">
            <Image
              src="/assets/navbar/Logo.svg"
              alt=""
              width={84}
              height={34}
              className="block lg:hidden cursor-pointer"
            />
          </div>
        </div>
        <ul className="lg:flex justify-between w-52 cursor-pointer  hidden">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
        <div>
          <button className="w-[129px] h-[35px] cursor-pointer bg-primary lg:block hidden rounded-full">
            Contact Us
          </button>
        </div>
        <div className="lg:hidden block">
          <AiOutlineMenu className="text-white w-10 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
