import React from "react";

const Page = ({ children }) => {
  return (
    <div className="flex flex-1  h-full  items-center justify-center">
      <h1>Page</h1>
      {children}
    </div>
  );
};

export default Page;
