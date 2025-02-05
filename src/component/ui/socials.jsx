import { Facebook, Linkedin } from "lucide-react";

const Socials = () => {
  return (
    <div className="flex items-center gap-5">
      <a
        href="https://www.linkedin.com/company/letscr8t"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin
          color="#f4f4f4"
          size={24}
          strokeWidth={1}
          className=" hover:fill-[#C9A13E] cursor-pointer transition-colors duration-300"
        />
      </a>

      <a
        href="https://github.com/WeBuildWithLove"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook
          color="#f4f4f4"
          size={24}
          strokeWidth={1}
          className=" hover:fill-[#C9A13E] cursor-pointer transition-colors duration-300"
        />
      </a>
    </div>
  );
};

export default Socials;
