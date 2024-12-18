import React from "react";

const SeactionHeading = ({ children, className }) => {
  return (
    <div>
      <h2 className={`text-[44px] leading-[130%] ${className}`}>{children}</h2>
    </div>
  );
};

export default SeactionHeading;
