import React, { memo } from "react";

const Memo = ({ counter }) => {
  console.log("render memo");
  return (
    <div className="p-4 aspect-video items-center justify-center flex border my-4 rounded-md bg-slate-600 text-slate-50 font-bold">
      <span>{counter}</span>
    </div>
  );
};

export default memo(Memo);
