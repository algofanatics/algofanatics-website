import React from "react";
import { Card } from "@/components/Micro/Blog/Card/Card";
import { BsFilter } from "react-icons/bs";
import Button from "@/components/Micro/Button/Button";
import UseFetch from "@/hooks/get/UseFetch";
import Link from "next/link";
import { userInfoContext } from "@/pages/_app";
import { AiOutlinePlus } from "react-icons/ai";
import Skeleton from "@/components/Micro/Skeleton/Skeleton";

const Blog = () => {
  const userInformation = React.useContext(userInfoContext);
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/auth/blog";
  const { data, isLoading } = UseFetch(endPoint, {
    headers: {
      Authorization: `Bearer ${userInformation?.token}`,
    },
  });

  //search functionality
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState(data);
  React.useEffect(() => {
    const searchFetch = async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL +
            `/auth/blog?tag=${search}`,
          {
            headers: {
              Authorization: `Bearer ${userInformation?.token}`,
            },
          }
        );
        const data = await res.json();
        setFiltered(data);
      } catch (error: any) {
        return error.message;
      }
    };
    searchFetch();
  }, [search]);

  return (
    <main className="">
      <div className="w-full xl:hidden">
        <Link href="/admin?tab=create">
          <Button className="flex justify-center h-11 w-40 rounded-full text-sm items-center bg-grey my-8">
            <AiOutlinePlus /> Add new blog
          </Button>
        </Link>
      </div>

      <div className="flex xl:items-center justify-between xl:py-0 py-3">
        <div className="xl:py-8 xl:items-center w-full flex flex-col xl:flex-row">
          <BsFilter className="w-9 h-9 mr-2 xl:block hidden" />
          <div className="max-w-sm">
            <select
              className=" h-10 w-full lg:w-72 bg-gray-100 border rounded px-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            >
              <option value="">All</option>
              <option value="frontend">Frontend development</option>
              <option value="backend">Backend development</option>
              <option value="algorithms">algorithms</option>
            </select>
          </div>
        </div>
        <div className="hidden justify-end xl:flex">
          <Link href="/admin?tab=create">
            <Button className="bg-grey w-44 md:block text-black text-base font-medium h-10  rounded-full my-4">
              Add new post
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {isLoading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-72 h-72 sm:w-full rounded-lg"
                />
              ))
            : null}
        </div>
        {data && <Card blogDetails={filtered?.details} />}
      </div>
    </main>
  );
};

export default Blog;
