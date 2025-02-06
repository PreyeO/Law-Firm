import PropTypes from "prop-types";

const WhoWeAre = ({ description, title }) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-[350px]">
      <h3 className="font-bold lg:text-3xl text-xl">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default WhoWeAre;

WhoWeAre.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
