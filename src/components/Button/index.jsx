import React from "react";

const Button = ({ title, Text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-3 rounded-md shadow-lg   bg-slate-700 text-slate-300 active:opacity-90 hover:bg-slate-600 hover:text-teal-50"
    >
      {title && <h1 className="font-semibold text-[12px]">{title}</h1>}
      {/* {title && <Text />} */}
      {<Text />}
    </button>
  );
};

export default Button;
