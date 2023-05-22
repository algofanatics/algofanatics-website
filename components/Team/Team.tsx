import React from "react";
import TeamComponent from "../Micro/Team/TeamComponent";

const Team = () => {
  return (
    <main>
      <div className="container mx-auto">
        <section className=" lg:pt-28 pt-20 px-5">
          <h1 className="text-center font-work md:text-3xl font-semibold  text-2xl lg:text-5xl lg:font-semibold">
            Meet The Team of Experts
          </h1>
        </section>
        <section className="grid lg:pt-20 pt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-14 place-items-center">
          <TeamComponent
            name="Samson Ajulor"
            role="Backend Developer"
            image="/assets/team/samson.svg"
            alt="Samson"
          />
            <TeamComponent
            name="Jessica Joseph"
            role="Frontend Developer"
            image="/assets/team/jessica.svg"
            alt="Jessica"
          />
         
          <TeamComponent
            name="Ololade Otemade"
            role="Frontend Developer"
            image="/assets/team/lolade.svg"
            alt="Ololade"
          />
          <TeamComponent
            name="Foluso Kayode"
            role="Fullstack Developer"
            image="/assets/team/folu.svg"
            alt="Foluso"
          />
           <TeamComponent
            name="Nobei Joan"
            role="Product Designer"
            image="/assets/team/joan.svg"
            alt="Joan"
          />
        
          <TeamComponent
            name="Mujeeb Adebowale"
            role="Backend Developer"
            image="/assets/team/mujeeb.svg"
            alt="Mujeeb"
          />
        </section>
      </div>
    </main>
  );
};

export default Team;
