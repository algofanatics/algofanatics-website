import Image from "next/image";
import Card from "../Micro/Services/Card";

const Services = () => {
  return (
    <main className="lg:bg-services">
      <section className="container mx-auto lg:px-8 px-5 pt-10 lg:py-28">
        <div>
          <h1 className="text-3xl font-work lg:text-5xl font-semibold text-center lg:text-center">
            What we offer
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-10 gap-x-5  lg:mt-20 mt-5 px-0 xl:px-10 ">
          <Card
            image="/assets/services/1.svg"
            image2="/assets/services/1.svg"
            course="Backend Development Resources and Roadmap"
            description="   Understand how to create responsive web pages also Learn how to
              use popular frontend frameworks like React, Vue, and Angular"
          />
          <Card
            image="/assets/services/2.svg"
            image2="/assets/services/2.svg"
            course="Frontend Development Resources and Roadmap"
            description="Understand how to create responsive web pages also Learn how to
            use popular frontend frameworks like React, Vue, and Angular"
          />
          <Card
            image="/assets/services/3.svg"
            image2="/assets/services/3.svg"
            course="Algorithm Resources and Roadmap"
            description="Understand common algorithmic paradigms like divide and conquer,
            dynamic programming, and greedy algorithms. Practice problem-solving on websites like LeetCode or HackerRank"
          />
          <Card
            image="/assets/services/4.svg"
            image2="/assets/services/4.svg"
            course="System Design Resources and Roadmap"
            description="Learn about different architectural patterns like client-server,
            microservices, and event-driven architecture. Practice designing
            systems based on realistic scenarios."
          />
        </div>
      </section>
    </main>
  );
};

export default Services;
