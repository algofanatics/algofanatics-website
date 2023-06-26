import React from "react";
import { useRouter } from "next/router";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Management from "./Management";
import Create from "./Create";
import Image from "next/image";
import { BiBookAlt, BiVideoOff } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { AiFillDatabase } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { getCookie } from "cookies-next";

export type TabsTypes = {
  title: React.ReactNode;
  query: string;
};

const tabs: TabsTypes[] = [
  {
    title: (
      <div className="flex items-center">
        <BiBookAlt /> <span className="pl-1">Blog</span>
      </div>
    ),
    query: "blog",
  },
  {
    title: (
      <div className="flex items-center">
        <BiVideoOff /> <span className="pl-1">Create</span>
      </div>
    ),
    query: "create",
  },
  {
    title: (
      <div className="flex items-center">
        <IoIosSettings /> <span className="pl-1">Portfolio</span>
      </div>
    ),
    query: "portfolio",
  },
  {
    title: (
      <div className="flex items-center">
        <AiFillDatabase /> <span className="pl-1">Management</span>
      </div>
    ),
    query: "management",
  },
];

const TabsComponent: any = {
  blog: Blog,
  create: Create,
  portfolio: Portfolio,
  management: Management,
};

const Tabs = () => {
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    router.replace(
      { pathname: router.asPath.split("?")[0], query: { tab } },
      undefined,
      {
        shallow: true,
      }
    );
  };

  const CurrentTab = React.useMemo(
    () => (router.query.tab as string) || "blog",
    [router.query]
  );

  const Component = React.useCallback(() => {
    const tab = tabs.find((tab) => tab.query === CurrentTab);
    if (!tab) {
      return <Blog />;
    }
    const TabComponent = TabsComponent[CurrentTab || "blog"];
    return <TabComponent />;
  }, [CurrentTab]);

  //prevent hydration
  const [userName, setUserName]= React.useState("")
  const response = getCookie("details");
  const details = typeof response === "string" ? JSON.parse(response) : null;
  React.useEffect(() => {
    const userName = details?.username;
    setUserName(userName)
  }, [userName]);

  return (
    <main className="container mx-auto grid flex-grow w-full gap-x-1  md:grid-cols-4 rounded-xl ">
      <section className="bg-white mb-5 w-full p-8">
        <Image
          src="/assets/navbar/Logo2.svg"
          alt="algofanatics logo"
          width={155}
          height={65}
        />
        <ul className="flex items-center py-10 space-x-5 cursor-pointer md:flex-col md:items-start md:space-x-0">
          {tabs.map((tab) => (
            <div key={tab.query} onClick={() => handleTabChange(tab.query)}>
              <li className="py-4 text-gray-400 text-xl">{tab.title}</li>
            </div>
          ))}
        </ul>
      </section>

      <section className="w-full h-full p-8 md:px-5 md:col-span-3">
        <nav className="flex justify-between items-center pb-5">
          <h1 className="text-3xl font-semibold py-4">
            {CurrentTab.charAt(0).toUpperCase() + CurrentTab.slice(1)}
          </h1>
          <div className="flex space-x-5 items-center">
            <RxAvatar className="text-2xl" />
            <div className="flex flex-col">
              {userName && <p className="text-lg font-semibold">{userName}</p>}
              <p className="text-sm text-Text">Admin</p>
            </div>
          </div>
        </nav>
        <div>
          <Component />
        </div>
      </section>
    </main>
  );
};

export default Tabs;
