/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { CiLinkedin, CiTwitter } from "react-icons/ci";

type Props = {
  name: string;
  role: string;
  image: any;
  alt: string;
  twitter: string;
  linkedin: string;
  borderColor: string;
};
const TeamComponent = ({
  name,
  role,
  image,
  alt,
  twitter,
  linkedin,
  borderColor,
}: Props) => {
  return (
    <div
      className={`flex-col flex justify-center items-center border rounded-md border-${borderColor} border-opacity-70 w-80 h-[372px]`}
    >
      <div className="h-40 w-40 bg-green-100 rounded-full">
        <img src={image} alt={alt} className="w-full h-auto" />
      </div>
      <div>
        <h3 className="pt-3 pb-1 font-bold text-2xl">{name}</h3>
        <p className="text-xl text-career">{role}</p>
      </div>
      <div className="flex justify-between py-5 w-24 cursor-pointer">
        <Link href={linkedin} legacyBehavior>
          <a target="_blank">
            <CiLinkedin className="text-primary w-7 h-6" />
          </a>
        </Link>

        <Link href={twitter} legacyBehavior>
          <a target="_blank">
            <CiTwitter className="text-primary w-7 h-6" />
          </a>
        </Link>
        <div>
          <img
            src="/assets/team/primaryLogo.svg"
            alt="Logo"
            className="w-7 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
