/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../../Button/Button";
import { RiShareForwardLine } from "react-icons/ri";
import { BsDownload, BsFillTagFill } from "react-icons/bs";

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
  content: string;
};

type Props = {
  blogDetails: BlogType[];
};

const options: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const wordCount = content?.trim().split(/\s+/).length;
  const readingTimeInMinutes = wordCount / wordsPerMinute;
  const minutes = Math.floor(readingTimeInMinutes);
  const seconds = Math.floor((readingTimeInMinutes - minutes) * 60);
  const readingTime = minutes + (seconds > 30 ? 1 : 0);
  return readingTime;
};

export const Card = ({ blogDetails }: Props) => {
  console.log(blogDetails);
  return (
    <article className="grid grid-cols-1 lg:grid-cols-3  py-2 md:grid-cols-2 gap-5 rounded-sm cursor-pointer w-full">
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
              <div className="">
                <p className="first-letter:uppercase font-medium text-grayBlack">
                  {blog.tags[0]}
                </p>
              </div>
              <section>
                <div>
                  <h3 className="py-2 font-semibold">{blog.title}</h3>

                  <div className="border-gray-100 border"></div>
                  <p className="font-medium text-sm py-2 text-recent">
                    {blog.createdAt &&
                      new Date(blog.createdAt).toLocaleDateString(
                        "en-US",
                        options
                      )}
                  </p>
                </div>

                <div className="space-x-3 py-2">
                  <Button className="h-8 bg-teal-100 rounded-md text-sm w-16">
                    Edit
                  </Button>
                  <Button className="h-8 bg-danger rounded-md text-sm w-16">
                    Delete
                  </Button>
                  <Button className="h-8 bg-algorithm rounded-md text-sm w-20">
                    Unpublish
                  </Button>
                </div>
              </section>
            </section>
          </Link>
        ))}
    </article>
  );
};

export const Recent = ({ blogDetails }: Props) => {
  return (
    <section>
      <h1 className="border-b border-primary">Recent Stories</h1>
      {Array.isArray(blogDetails) &&
        blogDetails
          ?.slice()
          .reverse()
          .map((blog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              <div className="py-3">
                <h2 className="text-base font-semibold">{blog.title}</h2>
                <div className="text-Text text-sm items-center flex justify-between py-3">
                  <p className=""> Author Name</p>
                  <p className="font-medium py-2 text-Text">
                    {blog.createdAt &&
                      new Date(blog.createdAt).toLocaleDateString(
                        "en-US",
                        options
                      )}
                  </p>{" "}
                </div>
                <hr />
              </div>
            </Link>
          ))}
    </section>
  );
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
        blogDetails
          ?.slice()
          .reverse()
          .map((blog) => (
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
                  <p className="font-semibold text-sm">
                    {calculateReadingTime(blog?.content)} min read
                  </p>
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
                    <BsFillTagFill className="text-xl" />
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
