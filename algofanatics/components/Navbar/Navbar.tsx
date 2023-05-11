import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black py-3 ">
      <div className="container mx-auto flex justify-between items-center text-white">
        <div>
          <Image src="/assets/navbar/Logo.svg" alt="" width={153} height={65} />
        </div>
        <ul className="lg:flex justify-between w-52  hidden">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
        <div>
          <button className="w-[129px] h-[35px] bg-primary lg:block hidden rounded-full">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
