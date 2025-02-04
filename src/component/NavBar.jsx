import { Link } from "react-scroll";
import Button from "./ui/button";
import Logo from "./ui/logo";
import Socials from "./ui/socials";

const NavBar = () => {
  return (
    <nav className="  h-[100px]  flex justify-between items-center navbar lg:px-[80px] px-[25px] border-b border-b-gray-600 w-full">
      <ul className="md:flex  gap-5 text-base font-medium hidden ">
        <li>
          {" "}
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline hover:decoration-[#C9A13E] hover:decoration-2"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline hover:decoration-[#C9A13E] hover:decoration-2"
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline hover:decoration-[#C9A13E] hover:decoration-2"
          >
            OUR SERVICES
          </Link>
        </li>
      </ul>

      <Logo />

      {/* <Link href="/contact" prefehtch> */}
      <div className=" md:flex gap-[30px] hidden items-center ">
        <div className="xl:flex hidden">
          <Socials />
        </div>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <Button
            className="lg:w-[200px] w-[150px] lg:h-[56px] h-[50px]"
            withHeartbeat
          >
            {" "}
            Contact Us
          </Button>
        </Link>
      </div>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer md:hidden flex"
      >
        <Button className="w-[130px] h-[50px]" withHeartbeat={false}>
          {" "}
          Contact Us
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
