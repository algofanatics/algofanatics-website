import Button from "@/components/Micro/Button/Button";
import UsePost from "@/hooks/post/UsePost";
import React from "react";
import { userInfoContext } from "@/pages/_app";

type Props = {
  title: string;
  content: string;
  tag: string[];
};

const Create = () => {
  const userInformation = React.useContext(userInfoContext);
  const [newBlog, setNewBlog] = React.useState<Props>({
    title: "",
    content: "",
    tag: [],
  });
  const baseURL = process.env.NEXT_PUBLIC_ALGOFANATICS_BASE_URL;
  const endPoint = baseURL + "/blog";

  const { handlePost } = UsePost(
    newBlog,
    "New blog post added successfully!",
    endPoint,
    "/admin?tab=blog",
    {
      headers: {
        Authorization: `Bearer ${userInformation?.token}`,
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePost(newBlog);
  };

  return (
    <main>
      <div className="">
       
        <form className="grid-cols-1 pt-5 grid" onSubmit={handleSubmit}>
          <label className="flex text-xl flex-col">
            Title
            <input
              className="h-14 placeholder:text-Text rounded-md my-2 p-3 placeholder:text-sm"
              placeholder="e.g 5 ways to stay on top of your game in Tech"
              value={newBlog.title}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
            />
          </label>
          <label className="flex flex-col text-lg py-5">
            Add Tags
            <select
              className="h-14 text-Text rounded-md my-2 p-3 text-sm"
              placeholder="e.g Backend"
              value={newBlog.tag}
              onChange={(e) =>
                setNewBlog({
                  ...newBlog,
                  tag: [...newBlog.tag, e.target.value],
                })
              }
            >
              <option value="">Select a tag</option>
              <option value="backend">backend</option>
              <option value="frontend">frontend</option>
              <option value="algorithm">algorithm</option>
            </select>
          </label>
          <label className="flex text-lg flex-col">
            Content
            <textarea
              className=" placeholder:text-Text rounded-md my-2 placeholder:text-sm p-5 min-h-[80vh]"
              placeholder="Start typing here....."
              value={newBlog.content}
              onChange={(e) =>
                setNewBlog({ ...newBlog, content: e.target.value })
              }
            ></textarea>
          </label>
          <Button className="bg-grey h-12rounded-full w-52 my-7">Save</Button>
        </form>
      </div>
    </main>
  );
};
export default Create;
