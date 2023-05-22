import React from "react";
import {CiLinkedin, CiTwitter} from 'react-icons/ci'

type Props = {
  name: string;
  role: string;
  image:any;
  alt:string;
};
const TeamComponent = ({ name, role, image, alt }: Props) => {
  return (
    <div className="flex-col flex justify-center items-center border-2 rounded-md border-cardBorder border-opacity-70 w-80 h-[372px]">
      <div className="h-40 w-40  bg-green-100 rounded-full">
      <img src={image} alt={alt} className="w-full h-auto"/>
      </div>
      <h3 className="pt-3 pb-1 font-bold text-2xl">{name}</h3>
      <p className="text-xl text-career">{role}</p>
      <div className="flex justify-between py-5 w-24 cursor-pointer">
        <CiLinkedin className="text-primary w-7 h-6"/>
        <CiTwitter className="text-primary w-7 h-6" />
        <img src="/assets/team/primaryLogo.svg" alt="Logo" className="w-7 h-6"/>
      </div>
    </div>
  );
};

export default TeamComponent;
