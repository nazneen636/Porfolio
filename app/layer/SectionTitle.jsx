import React from "react";

const SectionTitle = ({ titleText, className }) => {
  return (
    <div>
      <h4 className={`${className} text-2xl opacity-70`}>{titleText}</h4>
    </div>
  );
};

export default SectionTitle;
