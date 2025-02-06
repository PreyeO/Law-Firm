import Justice from "../assets/images/gavel.jpg";
import International from "../assets/images/international.jpg";
import Approach from "../assets/images/approach.jpg";
import WhoWeAre from "./ui/WhoWeAre";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="px-[25px] lg:px-[80px] 2xl:px-[100px] flex flex-col lg:my-[130px] my-[50px] "
    >
      <h6 className="underline decoration-[#C9A13E] text-center font-bold text-lg ">
        WHO WE ARE
      </h6>
      <div className=" grid grid-cols-1 items-center mt-[60px] min-w:w-[50%] w-full mx-auto gap-7">
        <div className="flex justify-center items-center gap-7 flex-wrap md:flex-nowrap">
          <WhoWeAre
            title="Our Mission"
            description="Delivering professional legal expertise with efficiency, transparency, and value for money."
          />
          <img
            src={Justice}
            alt="image of gavel"
            className="lg:w-[250px] md:w-[200px] md:h-[200px] h-[150px] rounded-md bg-[#333333] "
          />
        </div>
        <div className="md:flex justify-center items-center gap-7 flex-wrap md:flex-nowrap hidden">
          <img
            src={Approach}
            alt="image of lawyers"
            className="lg:w-[250px] md:w-[200px] md:h-[200px] h-[150px] rounded-md "
          />

          <WhoWeAre
            title="Our Approach"
            description="A mix of commercial awareness, legal excellence, and a client-first approach."
          />
        </div>
        <div className="flex justify-center items-center gap-7 flex-wrap md:hidden">
          <WhoWeAre
            title="Our Approach"
            description="A mix of commercial awareness, legal excellence, and a client-first approach."
          />
          <img
            src={Approach}
            alt="image of lawyers"
            className="lg:w-[250px] md:w-[200px] md:h-[200px] h-[150px] rounded-md "
          />
        </div>
        <div className="flex justify-center items-center gap-7 flex-wrap md:flex-nowrap ">
          <WhoWeAre
            title="International Reach"
            description="Expertise in both Nigerian and international law, helping clients navigate complex legal landscapes."
          />
          <img
            src={International}
            alt="image of lawyers"
            className="lg:w-[250px] md:w-[200px]  md:h-[200px] h-[150px] rounded-md "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
