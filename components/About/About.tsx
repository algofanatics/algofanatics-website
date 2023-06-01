import Image from "next/image";

const About = () => {
  return (
    <main className="lg:bg-services bg-white">
      <section className="container mx-auto lg:pt-28 lg:px-8 px-5 py-20">
      <div>
          <h1 className="text-3xl lg:text-5xl lg:hidden block font-work font-semibold">About Us</h1>
        </div>
      
        <div className="flex lg:flex-row flex-col-reverse lg:justify-evenly lg:items-center">
         <div>
         <div>
          <h1 className="text-3xl lg:text-5xl font-work font-semibold hidden lg:block">About Us</h1>
        </div>
        
          <p className="lg:max-w-md py-8 text-lg leading-9 first-letter:text-3xl">
            At Algofanatics, we understand the challenges that aspiring
            developers face in the tech industry, including the need to gain
            experience and build a network of industry connections
          </p>
          <p className="lg:max-w-lg lg:block hidden first-letter:text-3xl text-base leading-7">
            we believe that everyone deserves a chance to excel in the tech
            industry, regardless of their background or financial situation.
          </p>
         </div>
          <div>
            <Image
              src="/assets/about/about.svg"
              alt="about us"
              width={451}
              height={248}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
