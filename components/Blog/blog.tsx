import React from "react";
import { BsFilter } from "react-icons/bs";
import { Card, Recent } from "@/components/Micro/Blog/Card/Card";
import Navbar from "@/components/Navbar/Navbar";
import UseFetch from "@/hooks/get/UseFetch";
import { useContext } from "react";
import { userInfoContext } from "@/pages/_app";

const Blog = () => {
  const userInformation = useContext(userInfoContext);
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
    <div className="bg-blog 2xl:container 2xl:mx-auto overflow-x-hidden">
      <Navbar />
      <div className="lg:p-10 p-5 font-work">
        <h1 className="text-5xl font-semibold">Blog</h1>
        <div className="border-2 w-14 my-1 rounded-lg border-primary"></div>

        <div className="py-8 flex items-center">
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

        <section className="flex justify-between">
          <div className="xl:w-9/12 w-full">
            <div>{data && <Card blogDetails={filtered?.details} />}</div>
          </div>
          <div className="xl:w-3/12 xl:block hidden text-xl font-semibold pl-10">
            {data && <Recent blogDetails={data?.details} />}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
