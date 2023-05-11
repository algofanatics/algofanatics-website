import Image from "next/image";
const Services = () => {
  return (
    <main className="lg:bg-services">
      <section className="container mx-auto px-5 pt-10 lg:py-28">
        <div>
          <h1 className="text-3xl font-work lg:text-4xl font-semibold text-center lg:text-center">
            What we offer
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-14 gap-x-5 lg:mt-20 mt-10 px-0 xl:px-10 ">
          <div className="h-[260px] w-[335px]  lg:w-[477px] lg:h-[343px] lg:p-5 p-3 px-5 flex flex-col rounded-lg justify-center shadow-md cardBorder ">
            <Image
              src="/assets/services/1.svg"
              alt="skill"
              width={88}
              height={88}
              className="lg:block hidden"
            />
            <Image
              src="/assets/services/1.svg"
              alt="skill"
              width={61}
              height={56}
              className="lg:hidden block"
            />

            <h3 className="text-base lg:text-xl max-w-xs lg:max-w-lg lg:font-bold leading-6 py-3 font-bold">
              Backend Development Resources and Roadmap
            </h3>
            <p className="text-sm leading-6 lg:text-base lg:max-w-sm xl:max-w-fit lg:leading-8">
              Get familiar with the syntax, data types, and control structures
              of various programming languages. Learn to work with databases
            </p>
          </div>
          <div className="h-[260px] w-[335px]  lg:w-[477px] lg:h-[343px] lg:p-5 p-3 px-5 flex flex-col rounded-lg justify-center shadow-md cardBorder ">
            <Image
              src="/assets/services/2.svg"
              alt="skill"
              width={88}
              height={88}
              className="lg:block hidden"
            />
            <Image
              src="/assets/services/2.svg"
              alt="skill"
              width={61}
              height={56}
              className="lg:hidden block"
            />{" "}
            <h3 className="text-base lg:text-xl max-w-xs lg:max-w-lg lg:font-bold leading-6 py-3 font-bold">
              Frontend Development Resources and Roadmap{" "}
            </h3>
            <p className="text-sm leading-6 lg:text-base lg:max-w-sm xl:max-w-fit lg:leading-8">
              Understand how to create responsive web pages also Learn how to
              use popular frontend frameworks like React, Vue, and Angular
            </p>
          </div>{" "}
          <div className="h-[260px] w-[335px]  lg:w-[477px] lg:h-[343px] lg:p-5 p-3 px-5 flex flex-col rounded-lg justify-center shadow-md cardBorder ">
            <Image
              src="/assets/services/3.svg"
              alt="skill"
              width={88}
              height={88}
              className="lg:block hidden"
            />
            <Image
              src="/assets/services/3.svg"
              alt="skill"
              width={61}
              height={56}
              className="lg:hidden block"
            />{" "}
            <h3 className="text-base lg:text-xl max-w-xs lg:max-w-lg lg:font-bold leading-6 py-3 font-bold">
              Algorithm Resources and Roadmap
            </h3>
            <p className="text-sm leading-6 lg:text-base lg:max-w-sm xl:max-w-fit lg:leading-8">
              Understand common algorithmic paradigms like divide and conquer,
              dynamic programming, and greedy algorithms. Practice
              problem-solving on websites like LeetCode or HackerRank
            </p>
          </div>
          <div className="h-[260px] w-[335px]  lg:w-[477px] lg:h-[343px] lg:p-5 p-3 px-5 flex flex-col rounded-lg justify-center shadow-md cardBorder ">
            <Image
              src="/assets/services/4.svg"
              alt="skill"
              width={88}
              height={88}
              className="lg:block hidden"
            />
            <Image
              src="/assets/services/4.svg"
              alt="skill"
              width={61}
              height={56}
              className="lg:hidden block"
            />{" "}
            <h3 className="text-base lg:text-xl max-w-xs lg:max-w-lg lg:font-bold leading-6 py-3 font-bold">
              System Design Resources and Roadmap
            </h3>
            <p className="text-sm leading-6 lg:text-base lg:max-w-sm xl:max-w-fit lg:leading-8">
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
