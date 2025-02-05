// import Socials from "./ui/socials";

const Footer = () => {
  return (
    <footer id="contact" className="lg:pt-[150px] pt-[50px]">
      <div className="lg:px-[80px] px-[25px] mb-10">
        <div className="flex justify-around items-center flex-wrap">
          <div className=" flex flex-col items-center w-[300px]">
            <p className="text-center lg:text-3xl text-2xl font-bold text-[#1d2951]">
              S.O. FAMUYIWA <br />
              <span className="text-[#c9a13e]">& </span>
              <br />
              Co
            </p>
          </div>
          <div className="flex gap-4 flex-wrap mt-2 lg:mt-0">
            <div className="lg:w-[200px] w-full flex flex-col gap-2 text-sm">
              <h5 className="font-bold text-lg text-[#1d2951]">
                Office Address:
              </h5>
              <p>Lagos: No 3, Femi Okunnu Estate Phase 1, Lekki Lagos</p>
              <p>Abuja: No 3, Femi Okunnu Estate Phase 1, Abuja</p>
              <p>Portharcourt: No 3, Femi Okunnu Estate Phase 1, PH</p>
            </div>
            <div className="lg:w-[200px] flex flex-col gap-2  text-sm">
              <h5 className="font-bold text-lg text-[#1d2951]">Contact Us:</h5>
              <p>Telephone: +234-1-761-5965</p>
              <p>Direct line: +234-0-8077719777</p>
              <p>WhataApp: +234-0-807719777</p>
              <p>Email: info@sofamuyiwaandco.com</p>
            </div>
            {/* <Socials /> */}
          </div>
        </div>
      </div>
      <div className="border border-[#1d2951] opacity-20 w-full"></div>
      <h6 className="flex justify-center items-center mt-10 text-[12px]">
        copyright &copy; 2024 S.O. FAMUYIWA & CO. All Rights Reserved.
      </h6>
    </footer>
  );
};

export default Footer;
