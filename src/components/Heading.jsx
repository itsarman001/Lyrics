import React from "react";

const Heading = ({ children, className = "" }) => {
  return (
    <h2
      className={`text-xl lg:text-2xl font-medium text-accent ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
