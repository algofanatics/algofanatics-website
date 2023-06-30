import React from "react";
import md from "markdown-it";
import UseFetch from "@/hooks/get/UseFetch";
import { userInfoContext } from "../_app";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import { HiArrowLeft } from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsDownload, BsFillTagFill } from "react-icons/bs";
import { Card } from "@/components/Micro/Blog/Card/Card";

const id = () => {
  const router = useRouter();
  const { id } = router.query;
  const userInformation = React.useContext(userInfoContext);
  const endPoint = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL + `/blog?blogId=${id}`;
  const { data, isLoading } = UseFetch(endPoint, {
    headers: {
      Authorization: `Bearer ${userInformation?.token}`,
    },
  });

  const { data:All } = UseFetch(
    process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL + `/blog`,
    {
      headers: {
        Authorization: `Bearer ${userInformation?.token}`,
      },
    }
  );

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <main>
      <Navbar />
      <article className="mx-auto container flex items-center justify-center p-10">
        <div className="max-w-4xl w-8/12">
        {isLoading && <h1>Loading</h1>}
        {data?.details && (
          <div>
            <div>
              <HiArrowLeft className="text-4xl" />
              <h1 className="text-5xl font-bold py-10">
                {data?.details.title}
              </h1>
              <div className="flex justify-between items-center w-full border-b border-gray-200 py-2 ">
                <div className="flex justify-between text-grayBlack w-3/12 md:w-5/12 items-center">
                  <p>4 mins read</p>
                  <div className="h-1 w-1 bg-black rounded-full"></div>
                  <p>
                    {data?.details.createdAt &&
                      new Date(data?.details.createdAt).toLocaleDateString(
                        "en-US",
                        options
                      )}
                  </p>
                </div>
                <div className="flex items-center">
                  <RiShareForwardLine />
                  <BsDownload className="ml-4" />
                </div>
              </div>
            </div>
            <div className="py-4">
              <img
                src="/assets/blog/random.svg"
                className="w-full"
                alt="blog cover"
              />
              <div
                className="overflow-x-hidden"
                dangerouslySetInnerHTML={
                  typeof data?.details?.content === "string"
                    ? { __html: md().render(data?.details.content) }
                    : { __html: "" }
                }
              />
            </div>
            <div className="flex">
              <BsFillTagFill />

              {data?.details?.tags && data.details.tags[0] && (
                <p
                  className={`${
                    data.details.tags[0] === "backend"
                      ? "bg-algorithm"
                      : data.details.tags[0] === "frontend" ||
                        data.details.tags[0] === "algorithms"
                      ? "bg-systemDesign"
                      : "bg-signin"
                  } rounded-md p-1 text-xs ml-3 w-fit`}
                >
                  {data.details.tags[0]}
                </p>
              )}
            </div>

            {/* {Array.isArray(All?.details) && <Card blogDetails={All?.details.slice(0, 4)} />} */}
          </div>
        )}
        </div>
      </article>
    </main>
  );
};
export default id;
