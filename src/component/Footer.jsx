// import Socials from "./ui/socials";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="lg:py-[150px] py-[50px] md:py-[100px]   2xl:py-[250px] "
    >
      <div className="lg:px-[80px] px-[25px] 2xl:px-[100px] ">
        <div className="flex justify-around items-center flex-wrap">
          <div className=" flex flex-col items-center ">
            <p className="text-center lg:text-3xl text-2xl 2xl:text-6xl font-bold text-[#1d2951]">
              S.O. FAMUYIWA <br />
              <span className="text-[#c9a13e]">& </span>
              <br />
              Co.
            </p>
          </div>
          <div className="flex gap-4  2xl:gap-10 flex-wrap mt-2 lg:mt-0 justify-center">
            <div className="md:w-[200px] 2xl:w-[300px] w-full flex flex-col gap-2 text-sm 2xl:text-xl">
              <h5 className="font-bold text-lg 2xl:text-3xl text-[#1d2951]">
                Office Address:
              </h5>
              <p>THE CHALET, No 3, Femi Okunnu Estate Phase 1, Lekki Lagos</p>
            </div>
            <div className="md:w-[200px] 2xl:w-[300px] w-full flex flex-col gap-2 text-sm 2xl:text-xl">
              <h5 className="font-bold text-lg text-[#1d2951] 2xl:text-3xl ">
                Contact Us:
              </h5>
              <p>Telephone: +234-1-761-5965</p>
              <p>Direct line: +234-0-8077719777</p>
              <p>WhataApp: +234-0-807719777</p>
              <p>Email: info@sofamuyiwaandco.com</p>
            </div>
            {/* <Socials /> */}
          </div>
        </div>
      </div>
      <div className="border border-[#1d2951] opacity-20 w-full my-4"></div>
      <h6 className="flex justify-center items-center mt-10 text-[12px] md:text-sm 2xl:text-xl">
        copyright &copy; 2025 S.O. FAMUYIWA & Co. All Rights Reserved.
      </h6>
    </footer>
  );
};

export default Footer;
