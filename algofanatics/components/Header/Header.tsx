import Image from "next/image";

const Header = () => {
  return (
    <main className="">
      <div className="flex px-5 pt-10 overflow-x-hidden container mx-auto flex-col md:flex-row lg:items-center  items-start justify-start">
        <div className="lg:w-[1200px] w-full xl:w-7/12">
          <div className="font-semibold w-full font-work flex flex-col text-2xl md:text-2xl lg:text-5xl leading-9">
            <div className="flex items-center">
              <h1 className="">Build Your</h1>
              <div className="-mt-10 ml-2 lg:block hidden">
                <Image
                  src="/assets/header/algo.svg"
                  alt="algorithm"
                  width={300}
                  height={91}
                />
              </div>
              <div className="-mt-5 ml-2 lg:hidden block">
                <Image
                  src="/assets/header/algo2.svg"
                  alt="algorithm"
                  width={175}
                  height={50}
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
            <button className="lg:text-2xl text-sm font-normal shadow-black lg:w-[265px] lg:h-[63px] w-[147px] h-[35px] rounded-full bg-grey text-black hover:bg-green-600 hover:text-white transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:flex md-w-6/12 hidden py-10  justify-center items-center">
          <Image
            src={"/assets/header/header.svg"}
            width={836}
            height={641}
            alt="header"
          />
        </div>
        <div className="md:hidden block  py-10">
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
