import React from "react";

const ButtonCmp = ({ children, ...props }) => {
  return (
    <button
      {...props}
      type={props.type}
      className={`py-2 px-7 border-2 rounded-md border-white w-full
      ${props.className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCmp;
