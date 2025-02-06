import React from "react";

const ServiceCard = ({ title, description, className }) => {
  return (
    <div
      className={`${className} md:w-[220px] 2xl:min-w-[300px] 2xl:h-[350px] w-[160px] card h-[200px]  shadow-md md:p-4 2xl:p-6 text-center rounded-lg mx-auto flex flex-col justify-center gap-5`}
    >
      <h2 className=" font-bold md:text-lg 2xl:text-2xl text-base md:leading-7">
        {title}
      </h2>
      <p className="md:text-base text-sm 2xl:text-xl">{description}</p>
    </div>
  );
};

export default ServiceCard;
