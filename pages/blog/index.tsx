import React from "react";
import { BsFilter } from "react-icons/bs";
import { Card, Recent } from "@/components/Micro/Blog/Card/Card";
import Navbar from "@/components/Navbar/Navbar";

export type Blog = {
  image: string;
  time: string;
  title: string;
  date: string;
  tag: string;
  author: string;
  id: number;
};

const index = () => {
  const blog: Blog[] = [
    {
      image: "/assets/blog/random.svg",
      time: "5 mins read",
      date: "March 12, 2022",
      title: "Creating the blog Interface with random data",
      tag: "Frontend development",
      author: "Joan Nobei",
      id: 1,
    },
    {
      image: "/assets/blog/random.svg",
      time: "5 mins read",
      date: "March 12, 2022",
      title: "Sorting Algorithms: From Bubble Sort to Quick Sort",
      tag: "Backend development",
      author: "Joan Nobei",
      id: 2,
    },
    {
      image: "/assets/blog/random.svg",
      time: "5 mins read",
      date: "March 12, 2022",
      title: "Sorting Algorithms: From Bubble Sort to Quick Sort",
      tag: "Backend development",
      author: "Joan Nobei",
      id: 3,
    },
    {
      image: "/assets/blog/random.svg",
      time: "5 mins read",
      date: "March 12, 2022",
      title: "Creating the blog Interface with random data",
      tag: "Frontend development",
      author: "Joan Nobei",
      id: 4,
    },
    {
      image: "/assets/blog/random.svg",
      time: "5 mins read",
      date: "March 12, 2022",
      title: "Sorting Algorithms: From Bubble Sort to Quick Sort",
      tag: "Backend development",
      author: "Joan Nobei",
      id: 5,
    },
    {
      image: "/assets/blog/random.svg",
      time: "5 mins read",
      date: "March 12, 2022",
      title: "Creating the blog Interface with random data",
      tag: "Frontend development",
      author: "Joan Nobei",
      id: 6,
    },
    {
      image: "/assets/blog/random.svg",
      time: "5 mins read",
      date: "March 12, 2022",
      title: "Sorting Algorithms: From Bubble Sort to Quick Sort",
      tag: "Backend development",
      author: "Joan Nobei",
      id: 7,
    },
    {
      image: "/assets/blog/random.svg",
      time: "5 mins read",
      date: "March 12, 2022",
      title: "Creating the blog Interface with random data",
      tag: "Backend development",
      author: "Joan Nobei",
      id: 8,
    },
    {
      image: "/assets/blog/random.svg",
      time: "5 mins read",
      date: "March 12, 2022",
      title: "Sorting Algorithms: From Bubble Sort to Quick Sort",
      tag: "Backend development",
      author: "Joan Nobei",
      id: 9,
    },
  ];

  //filter functionality from frontend
  const [filterBlog, setFilteredBlog] = React.useState("");
    const filter = blog.filter((blog) =>
      blog.title.toLocaleLowerCase().includes(filterBlog.toLocaleLowerCase()) ||  blog.tag.toLocaleLowerCase().includes(filterBlog.toLocaleLowerCase()) 
    );
  

  return (
    <main className=" bg-blog overflow-x-hidden">
      <Navbar />
      <div className="lg:p-10 p-5 font-work">
        <h1 className="text-5xl font-semibold">Blog</h1>
        <div className="border-2 w-14 my-1 rounded-lg border-primary"></div>

        <section className="py-8 flex items-center">
          <BsFilter className="w-9 h-9 mr-2" />
          <select className="w-72 border h-10 rounded px-1 md:block hidden"
          value={filterBlog}
          onChange={(e)=>setFilteredBlog(e.target.value)}
          >
            <option>All</option>
            <option>Frontend development</option>
            <option>Backend development</option>
          </select>
          <input
            placeholder="Search"
            className="w-72 border ml-5 h-10 rounded px-4"
            value={filterBlog}
            onChange={(e) => setFilteredBlog(e.target.value)}
          />
        </section>

        <section className="flex justify-between">
          <div className="lg:w-8/12 w-6/12">
            <Card blogDetails={filter} />
          </div>
          <div className="lg:w-4/12 w-6/12 text-xl font-semibold pl-10">
            <Recent blogDetails={blog} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default index;
