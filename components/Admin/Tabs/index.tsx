import React from "react";
import { useRouter } from "next/router";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Management from "./Management";
import Create from "./Create";
import Image from "next/image";
import { BiBookAlt, BiVideoOff } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { AiFillDatabase, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { userInfoContext } from "@/pages/_app";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

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
  const userInformation = React.useContext(userInfoContext);
  const [tabNavigation, setTabNavigation] = React.useState<boolean>(false);

  //to prevent hydration error
  const [information, setInformation] = React.useState<any>(null);
  React.useEffect(() => {
    setInformation(userInformation);
  }, [userInformation]);

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
    <main className="2xl:container 2xl:mx-auto">
      <div className="grid flex-grow w-full gap-x-1 md:grid-cols-3 lg:grid-cols-5">
        <section className=" mb-5 md:bg-white bg-black w-full p-5">
          <div className="items-center md:flex hidden justify-between">
            <Link href="/">
              <Image
                src="/assets/navbar/Logo2.svg"
                alt="algofanatics logo"
                width={155}
                height={65}
              />
            </Link>
          </div>

          <div className="items-center md:hidden text-white w-full  flex justify-between">
            <div
              onClick={() => setTabNavigation(!tabNavigation)}
              className="text-3xl"
            >
              {!tabNavigation ? <RxHamburgerMenu /> : <AiOutlineClose />}
            </div>
            <Image
              src="/assets/navbar/logoM.svg"
              alt="algofanatics logo"
              width={155}
              height={65}
              className="w-24 h-10 md:w-40 md:h-16"
            />
            <Image
              src="/assets/avartar.svg"
              alt="algofanatics logo"
              width={46}
              height={46}
            />
          </div>
          <ul
            className={` flex md:pt-10 h-full md:h-fit md:static md:w-full absolute px-5 w-8/12 left-0 top-[86px] bg-white  cursor-pointer flex-col md:items-start md:space-x-0 ${
              !tabNavigation ? "hidden md:block" : " block"
            }`}
          >
            {tabs.map((tab) => (
              <div
                key={tab.query}
                onClick={() => {
                  handleTabChange(tab.query);
                  setTabNavigation(false);
                }}
              >
                <li className="py-4 text-gray-400 text-xl">{tab.title}</li>
              </div>
            ))}
          </ul>
        </section>

        <section className="w-full h-full md:p-5 px-5 py-2 md:px-5 md:col-span-2 lg:col-span-4">
          <nav className="flex justify-between items-center pb-5">
            <div className="md:py-4 block">
              <h1 className="text-3xl font-semibold">
                {CurrentTab.charAt(0).toUpperCase() + CurrentTab.slice(1)}
              </h1>
              <div className="border-2 border-primary w-10"></div>
            </div>
            <div className="md:flex hidden space-x-5 items-center">
              <Image
                src="/assets/avartar.svg"
                alt="algofanatics logo"
                width={46}
                height={46}
              />{" "}
              <div className="flex flex-col">
                {information && (
                  <p className="text-lg font-semibold">
                    {information?.username}
                  </p>
                )}
                <p className="text-sm text-Text">
                  {information?.isAdmin ? "Admin" : ""}
                </p>
              </div>
            </div>
          </nav>
          <div className="font-nunito">
            <Component />
          </div>
        </section>
      </div>
      <footer className="md:hidden block">
        <Footer />
      </footer>
    </main>
  );
};

export default Tabs;
