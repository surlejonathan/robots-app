import React from "react";

const Scroll = ({ children }) => {
  console.log("error");
  return (
    <div
      style={{ height: "800px", paddingBottom: "50px" }}
      className="overflow-y-scroll ba bw3"
    >
      {children}
    </div>
  );
};

export default Scroll;
