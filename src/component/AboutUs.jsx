import Justice from "../assets/images/justice.jpg";
import Gavel from "../assets/images/gavel.jpg";
import Robe from "../assets/images/robe.png";
import Paragraph from "./ui/paragraph";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="lg:px-[80px] px-[25px] 2xl:px-[100px] lg:py-[150px] md:py-[100px] 2xl:py-[250px] py-[50px]"
    >
      <h6 className="underline decoration-[#C9A13E] text-center font-bold text-lg lg:pl-[100px]  2xl:text-2xl">
        About Us
      </h6>
      <div className="flex xl:gap-6 gap-10 items-center flex-wrap lg:flex-nowrap justify-center mt-2">
        <div className="bg-gray-300 lg:h-[450px] h-[200px]  2xl:h-[550px] flex lg:w-[80%] w-full justify-center gap-2 rounded-md">
          <img
            src={Justice}
            alt="image of justice in law"
            className="lg:h-[270px] md:h-[200px] 2xl:h-[370px] h-[170px]  2xl:w-[300px] rounded-md lg:w-[150px] w-[100px] mt-[30px] lg:mt-[50px]"
          />
          <img
            src={Robe}
            alt="image of robe in law"
            className="lg:h-[400px] h-[200px] 2xl:h-[500px]  mt-2 rounded-md lg:w-[150px] w-[100px]  2xl:w-[300px] "
          />
          <img
            src={Gavel}
            alt="image of gravel in law"
            className="lg:mt-[-30px] mt-[-10px] rounded-md lg:h-[400px] h-[200px] lg:w-[150px] w-[100px] 2xl:h-[500px] 2xl:w-[300px]  "
          />
          {/* <img src={Legal} alt="image of gravel in law" className=""/> */}
        </div>
        <div className="w-full flex flex-col gap-3 items-center">
          <h4 className="md:text-3xl 2xl:text-5xl text-2xl font-bold w-[90%] lg:leading-[40px] 2xl:leading-[70px]">
            We Are One Of The Most{" "}
            <span className="text-[#C9A13E]">Progressive Law Firm</span> In The
            Country With A Growing Reputaion Within The Commercial Field
          </h4>

          <div className="w-[90%] flex flex-col gap-3 ">
            <Paragraph
              spanText="Our Mission"
              text="Delivering professional legal expertise with efficiency, transparency, and value for money."
            />
            <Paragraph
              spanText="Our Approach"
              text="A mix of commercial awareness, legal excellence, and a client-first approach."
            />
            <Paragraph
              spanText="International Reach"
              text="Expertise in both Nigerian and international law, helping clients navigate complex legal landscapes."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
