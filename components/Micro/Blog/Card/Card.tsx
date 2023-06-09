import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbShare3 } from "react-icons/tb";
import { IoDownloadOutline } from "react-icons/io5";
import { Blog } from "@/pages/blog";


export const Card = ({ blogDetails }: { blogDetails: Blog[] }) => {
  return (
    <div className=" grid xl:grid-cols-3 lg:grid-cols-2 gap-5 rounded-sm cursor-pointer">
      {blogDetails.map((blog) => (
        <div className="rounded-sm bg-white" key={blog.id}>
          <section>
            <img src={blog.image} className="w-full" alt="blog cover" />
          </section>

          <section className="p-2">
            <div className="flex justify-between text-Text">
              <p className="font-semibold text-sm">{blog.time}</p>
              <p className="font-medium text-xs">{blog.date}</p>
            </div>

            <div>
              <h3 className="py-2 font-semibold">{blog.title}</h3>
              <hr />
            </div>

            <div className="my-3 flex justify-between items-center">
              <p
                className={`${
                  blog.tag === "Backend development"
                    ? "bg-algorithm"
                    : blog.tag === "Frontend development"
                    ? "bg-systemDesign"
                    : "bg-backend"
                } rounded-md p-1 text-xs  w-fit`}
              >
                {blog.tag}
              </p>
              <div className="flex ">
                <TbShare3 className="w-5 h-5" />
                <IoDownloadOutline className="ml-2 w-5 h-5" />
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export const Recent = ({blogDetails}: {blogDetails: Blog[]}) => {
  return (
    <section>
      <h1 className="border-b border-primary">Recent Stories</h1>
      {blogDetails.map((blog) => (
        <Link href="/blog" key={blog.id}>
          <div className="py-3">
            <h2 className="text-base font-semibold">{blog.title}</h2>
            <div className="text-base text-career flex justify-between py-3">
              <p>{blog.author}</p>
              <p>{blog.date}</p>
            </div>
            <hr />
          </div>
        </Link>
      ))}
    </section>
  );
};
