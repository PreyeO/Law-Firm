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
      <div className=" grid grid-cols-1 items-center  mt-[60px] w-full mx-auto gap-[50px] justify-center">
        <div className="flex md:justify-around justify-center items-center flex-wrap md:flex-nowrap w-[70%] mx-auto gap-5  md:gap-10">
          <WhoWeAre
            title="Our Mission"
            description="Delivering professional legal expertise with efficiency, transparency, and value for money."
          />
          <img
            src={Justice}
            alt="image of gavel"
            className="lg:w-[250px] md:w-[200px] md:h-[200px] h-[150px]  w-full rounded-md bg-[#333333] "
          />
        </div>
        <div className=" gap-5 md:gap-10 w-[70%] mx-auto md:flex justify-center md:justify-around items-center  flex-wrap md:flex-nowrap hidden">
          <img
            src={Approach}
            alt="image of lawyers"
            className="lg:w-[250px] md:w-[200px] md:h-[200px] h-[150px] rounded-md  w-full  bg-[#333333] "
          />

          <WhoWeAre
            title="Our Approach"
            description="A mix of commercial awareness, legal excellence, and a client-first approach."
          />
        </div>
        <div className="gap-5  md:gap-10  w-[70%] mx-auto flex justify-center md:justify-around items-center  flex-wrap md:hidden">
          <WhoWeAre
            title="Our Approach"
            description="A mix of commercial awareness, legal excellence, and a client-first approach."
          />
          <img
            src={Approach}
            alt="image of lawyers"
            className="lg:w-[250px] md:w-[200px] md:h-[200px] h-[150px] rounded-md  w-full  bg-[#333333] "
          />
        </div>
        <div className=" gap-5 md:gap-0 flex md:justify-around justify-center w-[70%] mx-auto items-center  flex-wrap md:flex-nowrap ">
          <WhoWeAre
            title="International Reach"
            description="Expertise in both Nigerian and international law, helping clients navigate complex legal landscapes."
          />
          <img
            src={International}
            alt="image of lawyers"
            className="lg:w-[250px] md:w-[200px]  md:h-[200px] h-[150px] rounded-md  w-full  bg-[#333333] "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
