import Image from "next/image";

const About = () => {
  return (
    <main className="lg:bg-services bg-white">
      <section className="container lg:hidden  mx-auto pt-20 px-5 flex flex-col justify-center lg:items-center">
        <div>
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
        <div className="py-7 ">
          <Image
            src="/assets/about/about.svg"
            alt="about us"
            width={324}
            height={178}
          />
        </div>
        <div>
          <p className="first-letter:text-3xl md:text-lg text-base leading-8">
            At Algofanatics, we understand the challenges that aspiring
            developers face in the tech industry, including the need to gain
            experience and build a network of industry connections
          </p>
        </div>
      </section>

      <section className="container lg:block hidden mx-auto mt-28 px-5">
        <div className="flex justify-between items-center py-16">
          <div>
            <h1 className="text-5xl font-work font-semibold">About Us</h1>
            <div>
              <div className="py-8">
                <Image
                  src="/assets/about/about.svg"
                  alt="about us"
                  width={324}
                  height={178}
                />
              </div>
              <p className="max-w-lg first-letter:text-3xl text-base leading-7">
                we believe that everyone deserves a chance to excel in the tech
                industry, regardless of their background or financial situation.
              </p>
            </div>
          </div>
          <div>
            <p className="max-w-md text-lg leading-9 first-letter:text-3xl">
              At Algofanatics, we understand the challenges that aspiring
              developers face in the tech industry, including the need to gain
              experience and build a network of industry connections
            </p>
            <div className="py-6">
              <Image
                src="/assets/about/about2.svg"
                alt="about us"
                width={324}
                height={178}
              />
            </div>
            <p className="max-w-lg first-letter:text-3xl text-base leading-7">
              That's why we offer resources to anyone who wants to learn and grow in the
              industry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
