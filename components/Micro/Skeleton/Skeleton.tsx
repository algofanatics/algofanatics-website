import React from "react";

const Skeleton = ({
  className,
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) => {
  return (
    <div
      className={`${
        animate ? "animate-pulse" : ""
      } overflow-hidden bg-gray-200 ${className}`}
    >
      <div className="w-full h-full "></div>
    </div>
  );
};

export default Skeleton;
