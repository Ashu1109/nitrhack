import React from "react";

const layout = ({ children }) => {
  return (
    <div className={" flex justify-center items-center h-[100vh]"}>
      <div>{children}</div>
    </div>
  );
};

export default layout;
