import React from "react";
import { BsFilter } from "react-icons/bs";
import { IdCard, Recent } from "@/components/Micro/Blog/Card/Card";
import Navbar from "@/components/Navbar/Navbar";
import UseFetch from "@/hooks/get/UseFetch";
import { useContext } from "react";
import { userInfoContext } from "@/pages/_app";
import Footer from "../Footer/Footer";
import Skeleton from "../Micro/Skeleton/Skeleton";

const Blog = () => {
  const userInformation = useContext(userInfoContext);
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/auth/blog";
  const { data, isLoading } = UseFetch(endPoint, {
    headers: {
      Authorization: `Bearer ${userInformation?.token}`,
    },
  });

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
    <div className="bg-blog 2xl:container 2xl:mx-auto overflow-x-hidden">
      <Navbar />
      <div className="lg:p-10 p-5 font-work">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <div className="border-2 w-14 my-1 rounded-lg border-primary"></div>

        <div className="py-8 flex items-center">
          <BsFilter className="text-3xl mr-5" />
          <select
            className="w-72 h-10 rounded bg-gray-100 border border-gray-200 px-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          >
            <option value="">All</option>
            <option value="frontend">Frontend development</option>
            <option value="backend">Backend development</option>
            <option value="algorithms">Algorithms</option>
          </select>
        </div>

        <section className="flex justify-between">
          <div className="xl:w-9/12 w-full">
            <div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {isLoading
                  ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                      <Skeleton
                        key={index}
                        className=" h-72 w-full rounded-lg"
                      />
                    ))
                  : null}
              </div>
              {data && <IdCard blogDetails={filtered?.details} prop="3" />}
            </div>
          </div>
          <div className="xl:w-3/12 xl:block hidden text-xl font-semibold pl-10">
            <div className="grid grid-cols-1 gap-5">
              {isLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                    <Skeleton
                      key={index}
                      className="w-72 h-20 sm:w-full rounded-xl"
                    />
                  ))
                : null}
            </div>

            {data && <Recent blogDetails={data?.details} />}
          </div>
        </section>
      </div>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
