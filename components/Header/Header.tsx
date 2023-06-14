import Image from "next/image";
import Button from "../Micro/Button/Button";

const Header = () => {
  return (
    <main className="">
      <div className="flex lg:px-8 px-5 md:py-14 py-12 overflow-x-hidden container mx-auto flex-col md:flex-row lg:items-center  items-start justify-start">
        <div className="lg:w-[1200px] w-full xl:w-7/12">
          <div className="font-semibold w-full font-work flex flex-col text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-9">
            <div className="flex lg:items-center">
              <h1 className="">Build Your</h1>
              <div className="-mt-8 ml-2 lg:block hidden">
                <Image
                  src="/assets/header/algo.svg"
                  alt="algorithm"
                  width={250}
                  height={91}
                />
              </div>
              <div className="-mt-4 ml-2 lg:hidden block">
                <Image
                  src="/assets/header/algo2.svg"
                  alt="algorithm"
                  width={150}
                  height={30}
                />
              </div>
            </div>
            <h1 className="pt-2">Skills with AlgoFanatics</h1>
          </div>
          <p className="font-normal leading-7 lg:text-lg lg:max-w-md max-w-xl  text-base py-4 lg:py-10">
            At Algofanatics, we are dedicated to simplifying the challenges that
            struggling developers face when navigating the market space
          </p>
          <div>
          <Button className="shadow-lg lg:text-xl text-sm font-normal shadow-black lg:w-[280px] lg:h-[63px] w-[147px] h-[35px] rounded-full bg-grey text-black">
              Get Started
            </Button>
          </div>
        </div>
        <div className="md:flex md-w-6/12 hidden  justify-center items-center">
          <Image
            src={"/assets/header/header.svg"}
            width={750}
            height={641}
            alt="header"
          />
        </div>
        <div className="md:hidden pt-10 flex ">
          <Image
            src={"/assets/header/header2.svg"}
            width={850}
            height={250}
            alt="header"
          />
        </div>
      </div>
    </main>
  );
};

export default Header;
