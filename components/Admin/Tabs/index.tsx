import React from "react";
import { useRouter } from "next/router";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import UserManagement from "./UserManagement";
import Video  from "./Video";
import Image from "next/image";
import {BiBookAlt, BiVideoOff} from "react-icons/bi"
import {IoIosSettings} from "react-icons/io"
import {AiTwotoneDatabase} from "react-icons/ai"

export type TabsTypes = {
  title: React.ReactNode;
  query: string;
};

const tabs: TabsTypes[] = [
  { title: <div className="flex items-center"><BiBookAlt /> <span className="pl-1">Blog</span></div>, query: "blog" },
  { title: <div className="flex items-center"><BiVideoOff /> <span className="pl-1">Video</span></div>, query: "video" },
  { title: <div className="flex items-center"><IoIosSettings /> <span className="pl-1">Portfolio</span></div>, query: "portfolio" },
  { title: <div className="flex items-center"><AiTwotoneDatabase /> <span className="pl-1">User Management</span></div>, query: "usermanagement" },
];

const TabsComponent: any = {
  blog: Blog,
  video: Video,
  portfolio: Portfolio,
  usermanagement: UserManagement,
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

  return (
    <main className="grid flex-grow w-full min-h-screen grid-cols-1 md:grid-cols-4 rounded-xl">
      <section className="bg-white  mb-5 h-full p-8">
        <Image
          src="/assets/navbar/Logo2.svg"
          alt="algofanatics logo"
          width={155}
          height={65}
        />
        <ul className="flex flex-row items-center py-10 space-x-5 cursor-pointer md:flex-col md:items-start md:space-x-0">
          {tabs.map((tab) => (
            <div key={tab.query} onClick={() => handleTabChange(tab.query)}>
              <li className="py-4 text-gray-400 text-xl">
                {tab.title}
              </li>
            </div>
          ))}
        </ul>
      </section>
      <section className="h-full p-8 w-full">
        <Component />
      </section>
    </main>
  );
};

export default Tabs;
