import React, { useState } from "react";

const Search = () => {
  return (
    <div className="flex-1 px-2 flex items-center justify-center rounded-3xl ">
      <input
        type="text"
        value="Search"
        placeholder="Search"
        onChange={() => {}}
        className="mt-1 block w-full px-3 py-1 bg-white border border-slate-00 rounded-3xl text-sm shadow-sm placeholder-slate-500
      focus:outline-none focus:border-[#A2C8CD] 
      text-slate-500 font-medium
     
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
      />
    </div>
  );
};

export default Search;
