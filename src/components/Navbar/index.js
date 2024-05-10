import React from "react";
import Search from "./Search";

const Navbar = ({ children }) => {
  return (
    <div className="sticky bg-[#f5f9f9] flex items-center justify-between top-0  white p-4 px-10 ">
      <h1> Optional</h1>

      <Search />

      <div className="flex gap-x-2 text-sm">
        <span className="">n</span>
        <span>p</span>
        <span>s</span>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
