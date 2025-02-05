import { CircleArrowOutUpRight, MoveDown } from "lucide-react";
import Button from "./ui/button";
import Scales from "../assets/images/law-justice.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="px-[25px] lg:px-[80px] 2xl:px-[100px] hero lg:py-[80px] 2xl:py-[200px] py-[50px]  ">
      <div className="flex flex-col justify-center  items-center text-center relative">
        <div className="absolute right-0">
          <img
            src={Scales}
            alt="image of justice in law"
            className="2xl:h-[800px] md:h-[600px] h-[500px] opacity-10 mt-[-100px]"
          />
        </div>
        <div className="lg:w-[80%] flex flex-col items-center">
          <h1 className="md:text-[60px] 2xl:text-[120px] text-3xl md:leading-[81px] 2xl:leading-[150px] leading-[44.8px] md:font-extrabold font-bold text-[#f4f4f4]">
            Your <span className="text-[#C9A13E]">Trusted Legal Partner </span>
            for Businesses & Personal Matters
          </h1>
          <p className="md:text-lg text-base 2xl:text-4xl 2xl:leading-[80px] font-normal text-[#f4f4f4] opacity-80 md:w-[60%] pt-5">
            Expert legal solutions delivered with integrity, efficiency and a
            commitment to your success.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className=" mt-[50px] cursor-pointer"
          >
            <Button
              className="w-[250px] h-[56px] 2xl:w-[500px] 2xl:h-[100px]"
              withHeartbeat={false}
            >
              Get a Consultation{" "}
              <CircleArrowOutUpRight size={20} className="ml-2" />{" "}
            </Button>
          </Link>
          <div className="text-[#f4f4f4] text-[13px] font-normal 2xl:text-lg flex gap-[11px] items-center my-8 2xl:my-12">
            <h3>SCROLL</h3>
            <MoveDown size={20} className="animate-bounce" color="#C9A13E" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
