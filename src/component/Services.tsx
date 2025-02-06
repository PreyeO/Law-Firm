import React from "react";
import ServiceCard from "./ui/serviceCard";
import { ArrowDown } from "lucide-react";

const Services = () => {
  return (
    <section
      id="service"
      className="lg:px-[80px]  2xl:py-[250px]  px-[25px] 2xl:px-[100px] bg-[#1D2951] lg:py-[150px] md:py-[100px] py-[50px] service"
    >
      <h6 className="underline decoration-[#C9A13E] text-[#f4f4f4] text-center font-bold text-lg">
        SERVICES & PRACTICE AREAS
      </h6>
      <div className="grid mt-[60px] lg:grid-cols-3 xl:grid-cols-4  grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-2 2xl:gap-6 items-center lg:w-[80%] w-full mx-auto justify-center py-4">
        <ServiceCard
          className="bg-[#f4f4f4] "
          title="Corporate Law"
          description="Real estate transactions, commercial property development, and planning law."
        />
        <ServiceCard
          className="bg-[#C9A13E]  "
          title="Property Law"
          description="Business formations, mergers, joint ventures, and partnership agreements"
        />
        <ServiceCard
          className="bg-[#C9A13E]  "
          title="Financial Law"
          description="Banking, debt recovery, asset tracing, and financial fraud"
        />
        <ServiceCard
          className="bg-[#f4f4f4] "
          title="Media & Entertainment Law"
          description="Copyright, libel, contracts, and legal solutions for creatives"
        />
        <ServiceCard
          className="bg-[#f4f4f4] "
          title="Energy Law"
          description="Oil & gas agreements, exploration, and regulatory compliance."
        />

        <ServiceCard
          className="bg-[#C9A13E] "
          title="Construction Law"
          description="Legal support for contractors, developers, and emgineers."
        />
        <ServiceCard
          className="bg-[#C9A13E] "
          title="Environmental Law"
          description="Compliance, liability issues, and regulatory matters."
        />

        <ServiceCard
          className="bg-[#f4f4f4] "
          title="Information Technology & Telecommunications Law"
          description="Legal advisory services for IT and telecom industries"
        />
        <ServiceCard
          className="bg-[#f4f4f4] "
          title="Aviation Law"
          description="Legal advice for airlines, air disaster claims, and regulatory compliance."
        />
        <div className="ml-8 flex flex-col gap-5 justify-center items-center py-4 md:hidden">
          <p className="text-[#f4f4f4] font-bold">Need Legal assistance?</p>
          <div className="flex text-[#f4f4f4] justify-center items-center">
            <h3 className="font-bold lg:text-xl text-lg">Contact Us</h3>
            <ArrowDown
              size={20}
              className="ml-2 animate-bounce"
              color="#C9A13E"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
