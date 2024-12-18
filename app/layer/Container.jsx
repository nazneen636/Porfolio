import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1340px] mx-auto`}>{children}</div>
  );
};

export default Container;
