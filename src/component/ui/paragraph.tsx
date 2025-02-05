import React from "react";

const Paragraph = ({ spanText, text }) => {
  return (
    <p className="2xl:text-2xl">
      <span className=" font-bold 2xl:text-2xl">{spanText}</span>: {text}
    </p>
  );
};

export default Paragraph;
