import React from "react";
import md from "markdown-it";
import UseFetch from "@/hooks/get/UseFetch";
import { userInfoContext } from "../_app";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import { HiArrowLeft } from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsDownload, BsFillTagFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Form from "@/components/Form/Form";
import { IdCard } from "@/components/Micro/Blog/Card/Card";

const id = () => {
  const router = useRouter();
  const { id } = router.query;
  const userInformation = React.useContext(userInfoContext);
  const [relatedPosts, setRelatedPosts] = React.useState(null);
  const endPoint =
    process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL + `/auth/blog?blogId=${id}`;
  const { data: singleBlog } = UseFetch(endPoint, {
    headers: {
      Authorization: `Bearer ${userInformation?.token}`,
    },
  });

  React.useEffect(() => {
    const blogFetch = async () => {
      const res = axios
        .get(process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL + `/auth/blog`, {
          headers: {
            Authorization: `Bearer ${userInformation?.token}`,
          },
        })
        .then((res) => {
          setRelatedPosts(res?.data?.details?.slice(-4));
        })
        .catch((error) => {
          toast.error(error);
        });
    };
    blogFetch();
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <main className="bg-blog">
      <Navbar />
      <article className="mx-auto container overflow-x-hidden flex flex-col w-full lg:items-center lg:justify-center md:p-10 p-5">
        <div className=" md:max-w-4xl max-w-full">
          {singleBlog?.details && (
            <div>
              <div>
                <Link href="/blog">
                  <HiArrowLeft className="text-3xl" />
                </Link>
                <h1 className="text-4xl font-bold py-10">
                  {singleBlog?.details.title}
                </h1>
                <div className="flex justify-between items-center w-full border-b border-gray-200 py-2 ">
                  <div className="flex justify-between text-grayBlack sm:w-7/12 w-7/12 py-2 md:w-[32%] text-sm items-center">
                    <p>4 mins read</p>
                    <div className="h-1 w-1 bg-black rounded-full"></div>
                    <p>
                      {singleBlog?.details?.createdAt &&
                        new Date(
                          singleBlog?.details.createdAt
                        ).toLocaleDateString("en-US", options)}
                    </p>
                  </div>
                  <div className="flex items-center text-xl">
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
                  className="overflow-x-hidden font-nunito  prose md:prose-h1:text-3xl prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base max-w-full text-justify py-5"
                  dangerouslySetInnerHTML={
                    typeof singleBlog?.details?.content === "string"
                      ? { __html: md().render(singleBlog?.details.content) }
                      : { __html: "" }
                  }
                />
              </div>
              <div className="flex items-center">
                <BsFillTagFill className="text-xl" />

                {singleBlog?.details?.tags && singleBlog.details.tags[0] && (
                  <p
                    className={`${
                      singleBlog.details.tags[0] === "backend"
                        ? "bg-algorithm"
                        : singleBlog.details.tags[0] === "frontend" ||
                          singleBlog.details.tags[0] === "algorithms"
                        ? "bg-systemDesign"
                        : "bg-signin"
                    } rounded-md p-2 text-sm ml-3 w-fit`}
                  >
                    {singleBlog?.details.tags[0]}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center w-full border-b border-gray-200 py-5 ">
                <div className="flex justify-between text-grayBlack w-7/12 md:w-[32%] text-sm items-center">
                  <p>4 mins read</p>
                  <div className="h-1 w-1 bg-black rounded-full"></div>
                  <p>
                    {singleBlog?.details.createdAt &&
                      new Date(
                        singleBlog?.details.createdAt
                      ).toLocaleDateString("en-US", options)}
                  </p>
                </div>
                <div className="flex items-center text-xl">
                  <RiShareForwardLine />
                  <BsDownload className="ml-4" />
                </div>
              </div>
            </div>
          )}
          <div>
            <h1 className="text-xl py-4 w-full">Related Posts</h1>
            {Array.isArray(relatedPosts) && (
              <IdCard blogDetails={relatedPosts} prop="2" />
            )}
          </div>
        </div>
      </article>
      <div className="lg:mx-10">
        <Form />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};
export default id;
