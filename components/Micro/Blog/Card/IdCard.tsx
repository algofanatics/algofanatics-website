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


export const IdCard = ({ blogDetails }: Props) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-sm cursor-pointer w-full">
      {Array.isArray(blogDetails)  &&
        blogDetails?.map((blog) => (
          <Link
            href={`/blog/${blog.id}`}
            className="rounded-sm w-full bg-white"
            key={blog.id}
          >
            <section>
              <img src="/assets/blog/random.svg" className="w-full" alt="blog cover" />
            </section>

            <div className="p-2">
              <p
                className={`${
                  blog.tags[0] === "backend"
                    ? "bg-algorithm"
                    : blog.tags[0] === "frontend"
                    ? "bg-systemDesign"
                    : blog.tags[0] === "algorithms"
                    ? "bg-systemDesign"
                    : "bg-signin"
                } rounded-md p-1 text-xs  w-fit`}
              >
                {blog.tags[0]}
              </p>
            </div>
            <section className="p-2">
              <div className="flex justify-between text-Text">
                <p className="font-semibold text-sm">{blog.time}</p>
              </div>

              <div>
                <h3 className="py-1 font-medium">{blog.title}</h3>

                <hr />
                <p className="font-medium text-sm py-2 text-recent">
                  {blog.createdAt &&
                    new Date(blog.createdAt).toLocaleDateString(
                      "en-US",
                      options
                    )}
                </p>
              </div>

              <div className="space-x-3 py-1">
              <Button className="h-8 bg-teal-100 rounded-md text-sm w-16">Edit</Button>
                <Button className="h-8 bg-danger rounded-md text-sm w-16">Delete</Button>
                <Button className="h-8 bg-algorithm rounded-md text-sm w-20">Unpublish</Button>
              </div>
            </section>
          </Link>
        ))}
    </article>
  );
};

