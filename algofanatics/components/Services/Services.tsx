import Image from "next/image";
const Services = () => {
  return (
    <main className="bg-services">
      <section className="container mx-auto px-5 pt-10 lg:pt-28">
        <div>
          <h1 className="text-3xl font-work lg:text-4xl font-semibold text-start lg:text-center">
            What we offer
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-6 pb-20 mt-20 px-0 lg:px-10 ">
        <div className="h-[241px] w-[335px]  lg:w-[477px] lg:h-[343px] p-3 flex flex-col rounded-lg justify-center border-cardBorder border-4">
            <Image src="/" alt="skill" width={12} height={12} />
            <h3 className="text-base lg:text-xl max-w-xs leading-6 py-4 font-semibold">
              Backend Development Resources and Roadmap
            </h3>
            <p className="text-sm leading-5 lg:text-base lg:max-w-sm xl:max-w-fit lg:leading-8">
              Get familiar with the syntax, data types, and control structures
              of various programming languages. Learn to work with databases
            </p>
          </div>
          <div className="h-[241px] w-[335px]  lg:w-[477px] lg:h-[343px] p-3 flex flex-col rounded-lg justify-center border-cardBorder border-4">
            <Image src="/" alt="skill" width={12} height={12} />
            <h3 className="text-base lg:text-xl max-w-xs leading-6 py-4 font-semibold">
              Frontend Development Resources and Roadmap{" "}
            </h3>
            <p className="text-sm leading-5 lg:text-base lg:max-w-sm xl:max-w-fit lg:leading-8">
              Understand how to create responsive web pages also Learn how to
              use popular frontend frameworks like React, Vue, and Angular
            </p>
          </div>{" "}
          <div className="h-[241px] w-[335px]  lg:w-[477px] lg:h-[343px] p-3 flex flex-col rounded-lg justify-center border-cardBorder border-4">
            <Image src="/" alt="skill" width={12} height={12} />
            <h3 className="text-base lg:text-xl max-w-xs leading-6 py-4 font-semibold">
              Algorithm Resources and Roadmap{" "}
            </h3>
            <p className="text-sm leading-5 lg:text-base lg:max-w-sm xl:max-w-fit lg:leading-8">
              Understand common algorithmic paradigms like divide and conquer,
              dynamic programming, and greedy algorithms. Practice
              problem-solving on websites like LeetCode or HackerRank
            </p>
          </div>
          <div className="h-[241px] w-[335px]  lg:w-[477px] lg:h-[343px] p-3 flex flex-col rounded-lg justify-center border-cardBorder border-4">
            <Image src="/" alt="skill" width={12} height={12} />
            <h3 className="text-base lg:text-xl max-w-xs leading-6 py-4 font-semibold">
              System Design Resources and Roadmap{" "}
            </h3>
            <p className="text-sm leading-5 lg:text-base lg:max-w-sm xl:max-w-fit lg:leading-8">
              Learn about different architectural patterns like client-server,
              microservices, and event-driven architecture. Practice designing
              systems based on realistic scenarios.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
