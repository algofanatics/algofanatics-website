import React from "react";
import { Card } from "@/components/Micro/Blog/Card/Card";
import { BsFilter } from "react-icons/bs";
import Button from "@/components/Micro/Button/Button";
import UseFetch from "@/hooks/get/UseFetch";
import Link from "next/link";
import { userInfoContext } from "@/pages/_app";

const Blog = () => {
  const userInformation = React.useContext(userInfoContext);
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/blog";

  const { data } = UseFetch(endPoint, {
    headers: {
      Authorization: `Bearer ${userInformation?.token}`,
    },
  });

  //search functionality
  const [searchBox, setSearchBox] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState(data);
  React.useEffect(() => {
    const searchFetch = async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL + `/blog?tag=${search}`,
          {
            headers: {
              Authorization: `Bearer ${userInformation?.token}`,
            },
          }
        );
        const data = await res.json();
        setFiltered(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    searchFetch();
  }, [search]);

  React.useEffect(() => {
    const searchBoxFetch = async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL +
            `/blog?tag=${searchBox}`,
          {
            headers: {
              Authorization: `Bearer ${userInformation?.token}`,
            },
          }
        );
        const data = await res.json();
        setFiltered(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    searchBoxFetch();
  }, [searchBox]);

  return (
    <main className="py-5">
      <div className="flex justify-between items-center">
        <div className="py-8 items-center xl:flex hidden">
          <BsFilter className="w-9 h-9 mr-2" />
          <select
            className="w-72 border h-10 rounded px-1 md:block hidden"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          >
            <option value="">All</option>
            <option value="frontend">Frontend development</option>
            <option value="backend">Backend development</option>
          </select>
          <input
            placeholder="Search"
            className="w-72 border ml-5 h-10 rounded px-4"
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
          />
        </div>
        <div className="flex justify-end w-full">
          <Link href="/admin?tab=create">
            <Button className="bg-grey w-44 hidden md:block shadow-black text-black shadow-lg text-base font-medium h-10  rounded-full my-4">
              Add new post
            </Button>
          </Link>
        </div>
      </div>
      <div>{data && <Card blogDetails={filtered?.details} />}</div>
    </main>
  );
};

export default Blog;
