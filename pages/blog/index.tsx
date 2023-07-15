import React from "react";
import { BsFilter } from "react-icons/bs";
import { Card, Recent } from "@/components/Micro/Blog/Card/Card";
import Navbar from "@/components/Navbar/Navbar";
import UseFetch from "@/hooks/get/UseFetch";
import { useContext } from "react";
import { userInfoContext } from "../_app";

const Index = () => {
  const userInformation = useContext(userInfoContext);
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/blog";
  const { data } = UseFetch(endPoint, {
    headers: {
      Authorization: `Bearer ${userInformation?.token}`,
    },
  });

  return (
    <main className=" bg-blog container mx-auto overflow-x-hidden">
      <Navbar />
      <div className="lg:p-10 p-5 font-work">
        <h1 className="text-5xl font-semibold">Blog</h1>
        <div className="border-2 w-14 my-1 rounded-lg border-primary"></div>

        <div className="py-8 flex items-center">
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

        <section className="flex justify-between">
          <div className="lg:w-8/12 w-6/12">
            {data && <Card blogDetails={data?.details} />}
          </div>
          <div className="lg:w-4/12 w-6/12 text-xl font-semibold pl-10">
            {data && <Recent blogDetails={data?.details} />}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
