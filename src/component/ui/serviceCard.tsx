import React from "react";

const ServiceCard = ({ title, description, className }) => {
  return (
    <div
      className={`${className} md:w-[220px] w-[160px] h-[200px]  shadow-md lg:p-4 text-center rounded-lg mx-auto flex flex-col justify-center gap-5`}
    >
      <h2 className=" font-bold lg:text-lg text-base lg:leading-7">{title}</h2>
      <p className="lg:text-base text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
