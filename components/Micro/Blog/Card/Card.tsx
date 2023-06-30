/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../../Button/Button";

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

const options: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
export const Card = ({ blogDetails }: Props) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-3 py-2 md:grid-cols-2 gap-5 rounded-sm cursor-pointer w-full">
      {Array.isArray(blogDetails) &&
        blogDetails?.map((blog) => (
          <Link
            href={`/blog/${blog.id}`}
            className="rounded-sm w-full bg-white"
            key={blog.id}
          >
            <img
              src="/assets/blog/random.svg"
              className="w-full"
              alt="blog cover"
            />
            <section className="p-2">
              <div className="">
                <p className="first-letter:uppercase text-grayBlack">
                  {blog.tags[0]}
                </p>
              </div>
              <section className="">
                <div className="flex justify-between text-Text">
                  <p className="font-semibold text-sm">{blog.time}</p>
                </div>

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
        blogDetails?.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className="py-3">
              <h2 className="text-base font-semibold">{blog.title}</h2>
              <div className="text-Text text-sm items-center flex justify-between py-3">
                <p className=""> author name</p>
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
