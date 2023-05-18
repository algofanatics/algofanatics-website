import React from "react";

const Team = () => {
  return (
    <main>
      <div className="container mx-auto">
        <section className=" lg:pt-28 pt-20 px-5">
          <h1 className="text-center font-work md:text-3xl font-semibold  text-2xl lg:text-5xl lg:font-semibold">
            Meet The Team of Experts
          </h1>
        </section>
        <section className="grid lg:pt-20 pt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-20 place-items-center">
          <div className="flex-col flex justify-center items-center">
            <div className="h-40 w-40  bg-green-100 rounded-full"></div>
            <h3 className="pt-3 pb-1 font-bold text-2xl">Samson Ajulor</h3>
            <p className="text-xl text-career">Backend Developer</p>
          </div>
          <div className="flex-col flex justify-center items-center">
            <div className="h-40 w-40 bg-green-100 rounded-full"></div>
            <h3 className="text-2xl font-bold pt-3 pb-1 ">Nobei Joan</h3>
            <p className="text-xl text-career">Product Designer</p>
          </div>

          <div className="flex-col flex justify-center items-center">
            <div className="h-40 w-40 bg-green-100 rounded-full"></div>
            <h3 className="pt-3 pb-1 font-bold text-2xl">Lolade Otemade</h3>
            <p className="text-xl text-career">Frontend Developer</p>
          </div>
          <div className="flex-col flex justify-center items-center">
            <div className="h-40 w-40  bg-green-100 rounded-full"></div>
            <h3 className=" pt-3 pb-1 font-bold text-2xl">Foluso Kayode</h3>
            <p className="text-xl text-career"> Fullstack Developer</p>
          </div>
          <div className="flex-col flex justify-center items-center">
            <div className="h-40 w-40 bg-green-100 rounded-full"></div>
            <h3 className="pt-3 pb-1 font-bold text-2xl">Jessica Joseph</h3>
            <p className="text-xl text-career">Frontend Developer</p>
          </div>

          <div className="flex-col flex justify-center items-center">
            <div className="h-40 w-40 bg-green-100 rounded-full"></div>
            <h3 className="pt-3 pb-1 font-bold text-2xl">Mujeeb Adebowale</h3>
            <p className="text-xl text-career">Backend Developer</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Team;
