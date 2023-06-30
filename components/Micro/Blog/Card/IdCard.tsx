import React from "react";
import Link from "next/link";
import { BsFillTagFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";

export type BlogType = {
  image: string;
  time: string;
  title: string;
  date: string;
  tags: string[];
  author: string;
  id: number;
  updatedAt: string;
  createdAt: string;
};

type Props = {
  blogDetails: BlogType[];
};

export const IdCard = ({ blogDetails, prop }: Props & { prop: string }) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <article
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${prop} gap-6 cursor-pointer w-full`}
    >
      {Array.isArray(blogDetails) &&
        blogDetails?.map((blog) => (
          <Link
            href={`/blog/${blog.id}`}
            className="rounded-md w-full bg-white"
            key={blog.id}
          >
            <img
              src="/assets/blog/random.svg"
              className="w-full"
              alt="blog cover"
            />
            <section className="p-2">
              <div className="flex justify-between items-center text-Text">
                <div className="font-medium text-sm">5 mins read</div>
                <div className="font-medium text-sm py-2 text-recent">
                  {blog.createdAt &&
                    new Date(blog.createdAt).toLocaleDateString(
                      "en-US",
                      options
                    )}
                </div>
              </div>

              <h3 className="py-2 text-base font-semibold">{blog.title}</h3>
              <div className="border border-gray-100"></div>

              <div className="flex justify-between items-center w-full">
                <div className="space-x-3 py-3 flex items-center ">
                  <BsFillTagFill className="text-xl"/>
                  <div
                    className={`${
                      blog.tags[0] === "backend"
                        ? "bg-algorithm"
                        : blog.tags[0] === "frontend"
                        ? "bg-systemDesign"
                        : blog.tags[0] === "algorithms"
                        ? "bg-systemDesign"
                        : "bg-signin"
                    } rounded-md p-2 text-sm  w-fit`}
                  >
                    {blog.tags[0]}
                  </div>
                </div>
                <div className="flex text-xl">
                  <RiShareForwardLine />
                  <BsDownload className="ml-4" />
                </div>
              </div>

            </section>
          </Link>
        ))}
    </article>
  );
};
