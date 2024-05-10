import React, { memo, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

const SideBarItem = ({
  icon,
  text,
  alert,
  active,
  onClick,
  sidebarActive,
  path,
}) => {
  return (
    <Link to={path}>
      <li
        onClick={onClick}
        className={`relative flex px-4 items-center justify-start my-1 py-2  rounded-lg cursor-pointer transition-all group ${
          active
            ? "bg-[#A2C8CD]/50 text-[#4f919a]"
            : "bg-white hover:bg-[#A2C8CD]/20 "
        }`}
      >
        {icon}
        <span
          className={`font-semibold overflow-hidden flex-1  transition-all ${
            sidebarActive ? "ml-2" : "w-0 ml-0  "
          }  ${active ? "text-[#408C96]" : "text-slate-700"} overflow-hidden`}
        >
          {text}
        </span>
        {!sidebarActive && (
          <div className="absolute left-full right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover: group-hover:text-[#408C96] -translate-x-4 group-hover:translate-x-0 font-semibold transition-all ml-4 px-2">
            <span
              className={`bg-[#408C96]/20 px-2 text-sm py-1 rounded-md overflow-hidden`}
            >
              {text}
            </span>
          </div>
        )}
      </li>
    </Link>
  );
};

export default memo(SideBarItem);
