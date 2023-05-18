import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary mt-16 lg:mt-24 py-7">
      <nav className="container mx-auto px-5 flex items-center justify-between">
        <Image
          src="/assets/footer/Footer.svg"
          alt="algofanatics logo"
          width={86}
          height={36}
          className="cursor-pointer "
        />
        <div className="flex lg:w-40 w-28">
          <Image
          src="/assets/footer/twitter.svg"
          alt="algofanatics logo"
          width={35}
          height={35}      
          className="cursor-pointer "
          />   
              
          <Image
          src="/assets/footer/linkedin.svg"
          alt="algofanatics logo"
          width={35}
          height={35}          
          className="ml-6 cursor-pointer "
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
