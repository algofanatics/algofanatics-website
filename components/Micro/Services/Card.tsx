import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  image2: string;
  course: string;
  description: string;
};

const Card = ({ image, image2, course, description }: Props) => {
  return (
    <div
      className="h-[260px] w-[335px] lg:w-[477px] lg:h-[343px] lg:p-5 p-3 px-5 flex flex-col rounded-lg justify-center shadow-md border-cardBorder cursor-pointer"
    >
      <Image
        src={image}
        alt="skill"
        width={88}
        height={88}
        className="lg:block hidden"
      />
      <Image
        src={image2}
        alt="skill"
        width={61}
        height={56}
        className="lg:hidden block"
      />
      <h3 className="text-base lg:text-xl max-w-xs lg:max-w-lg lg:font-bold leading-6 py-3 font-bold">
        {course}
      </h3>
      <p className="text-sm leading-6 lg:text-base lg:max-w-sm xl:max-w-fit lg:leading-8">
        {description}
      </p>
    </div>
  );
};

export default Card;
