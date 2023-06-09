import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Button from "../Micro/Button/Button";

const items: MenuProps["items"] = [
  {
    label: (
      <a href="/blog" className="hover:text-primary">
        Backend Development
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a href="/blog" className="hover:text-primary">
        Frontend Development
      </a>
    ),
    key: "1",
  },
  {
    label: <a href="/blog">Algorithms</a>,
    key: "2",
  },
  {
    label: <a href="/blog">System Design</a>,
    key: "3",
  },
];

const Navbar = () => {
  const [navigation, setNavigation] = React.useState(false);
  return (
    <nav className="bg-black py-3 ">
      <div className="container mx-auto flex lg:px-8 px-5 justify-between items-center text-white">
        <div>
          <Link href="/">
            <Image
              src="/assets/navbar/Logo.svg"
              alt="logo"
              width={153}
              height={65}
              className="hidden lg:block cursor-pointer"
            />
          </Link>
          <div className="lg:hidden flex">
            <Image
              src="/assets/navbar/Logo.svg"
              alt="logo"
              width={84}
              height={34}
              className="block lg:hidden cursor-pointer"
            />
          </div>
        </div>
        <ul className="lg:flex justify-between w-52 cursor-pointer hidden">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#about" onClick={() => setNavigation(false)}>
              About
            </a>
          </li>
          <li>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Blog
                  <DownOutlined className="text-sm" />
                </Space>
              </a>
            </Dropdown>
          </li>
        </ul>

        <ul
          className={`${
            navigation
              ? "lg:hidden absolute w-full h-96 py-14 left-0 top-14 bg-black flex flex-col justify-between items-center  cursor-pointer "
              : "hidden"
          }`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setNavigation(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/blog"> Blog </a>
          </li>
        </ul>
        <div>
          <Button className="w-[129px] h-[35px] cursor-pointer bg-primary lg:block hidden rounded-full">
            Contact Us
          </Button>
        </div>
        <div
          className="lg:hidden block"
          onClick={() => setNavigation(!navigation)}
        >
          {navigation ? (
            <TfiClose className="text-white w-9 h-5" />
          ) : (
            <AiOutlineMenu className="text-white w-10 h-6" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
