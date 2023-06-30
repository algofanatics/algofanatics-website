import React from "react";
import md from "markdown-it";
import UseFetch from "@/hooks/get/UseFetch";
import { userInfoContext } from "../_app";
import { useRouter } from "next/router";

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

  console.log("dynamic blog", data)

  return (
    <article className="mx-auto container p-10">
      { isLoading && <h1>Loading</h1>}
      {data?.details && (
        <div>
          <h1 className="text-3xl">{data?.details.title}</h1>
          <div
            className="overflow-x-hidden"
            dangerouslySetInnerHTML={
              typeof data?.details?.content === "string"
                ? { __html: md().render(data?.details.content) }
                : { __html: "" }
            }
          />
        </div>
      )}
    </article>
  );
};
export default id;
