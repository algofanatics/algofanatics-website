import React, { useEffect } from "react";
import { blogType } from "@/components/Micro/Blog/Card/Card";
import { Card } from "@/components/Micro/Blog/Card/Card";
import { BsFilter } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import Button from "@/components/Micro/Button/Button";
import axios from "axios";
import UseFetch from "@/hooks/get/UseFetch";
import { getCookie } from "cookies-next";

const Blog = () => {
  //API Endpoint
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/blog";
  const response = getCookie("details");
  const details = typeof response === "string" ? JSON.parse(response) : null;

  const { data } = UseFetch(endPoint, {
    headers: {
      Authorization: `Bearer ${details?.token}`,
    },
  });
  console.log(data?.details);

  return (
    <main className="py-5">
      <div className="flex justify-between items-center">
        <div className="py-8 items-center xl:flex hidden">
          <BsFilter className="w-9 h-9 mr-2" />
          <select className="w-72 border h-10 rounded px-1 md:block hidden">
            <option>All</option>
            <option>Frontend development</option>
            <option>Backend development</option>
          </select>
          <input
            placeholder="Search"
            className="w-72 border ml-5 h-10 rounded px-4"
          />
        </div>
        <div className="flex justify-end w-full">
          <Button className="bg-grey w-44 hidden md:block shadow-black text-black shadow-lg text-base font-medium h-10  rounded-full my-4">
            Add new post
          </Button>
        </div>
      </div>
      <div>
        <Card blogDetails={data?.details} />
      </div>
    </main>
  );
};

export default Blog;
