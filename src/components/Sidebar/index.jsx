import React, { useEffect, useLayoutEffect, useState } from "react";
import text_inl from "../../assests/inlokal/text_inlokal.png";
import { ArrowLeftToLine, ArrowRightToLine, ChevronUp } from "lucide-react";
import logo from "../../assests/inlokal/icon_inlokal.png";
import ava from "../../assests/img/ava.png";

import { useDispatch, useSelector } from "react-redux";
import { setSidebarActive } from "../../Apps/features/layout";
const Sidebar = ({ children }) => {
  const [screenSize, setScreenSize] = useState();
  const [screen, setScreen] = useState("");
  const sidebarActive = useSelector(
    ({ inlokal }) => inlokal.layout.sidebarActive
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (screenSize >= 500) {
      setScreen("desktop");
    } else {
      setScreen("mobile");
    }
  }, [screenSize]);

  // useEffect(() => {
  //   if (screen === "mobile") {
  //     dispatch(setSidebarActive());
  //   }
  // }, [screen]);
  return (
    <>
      {screen === "desktop" && (
        <aside
          className={`lg:sticky top-0 z-10 py-2 px-1 min-w-fit h-screen    md:sticky md:w-auto lg:w-max fixed`}
        >
          <nav className=" h-full z-20 flex flex-col border-r border-slate-100 bg-white  ">
            <div className="p-2  flex justify-between items-center  relative">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="logo"
                  className="w-12 ml-2 items-center flex-1"
                />
                <img
                  src={text_inl}
                  alt="icon inlokal"
                  className={`transition-all ml-1 ${
                    !sidebarActive ? "h-0 ml-0" : `h-7`
                  }`}
                />
              </div>

              <button
                onClick={() => dispatch(setSidebarActive())}
                className="absolute z-30 -right-7 px-1 py-1 bg-slate-100 rounded-r-md "
              >
                {sidebarActive ? (
                  <ArrowLeftToLine size={20} className="text-slate-600" />
                ) : (
                  <ArrowRightToLine size={20} className="text-slate-600" />
                )}
              </button>
            </div>

            <ul className="flex-1 px-3 items-center">{children}</ul>

            <div
              className={`flex p-3 items-center border-t py-2 cursor-pointer hover:bg-gray-50/80 transition-colors group relative`}
            >
              <img
                src={ava}
                alt="avatar"
                className="w-11 border bg-slate-100 rounded-full overflow-hidden aspect-square object-cover"
              />

              {!sidebarActive && (
                <div className="absolute right-0 left-full ml-4 invisible transition-all opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible">
                  <span className="bg-[#408C96]/20 px-3 rounded-md py-2 font-normal text-slate-600">
                    tamamhudaaa@gmail.com
                  </span>
                </div>
              )}

              <div
                className={`flex ml-2 justify-between items-center overflow-hidden transition-all ${
                  sidebarActive ? "" : "w-0 ml-0 "
                }`}
              >
                <div className="leading-4">
                  <h4 className="font-medium text-sm">Tamam Huda</h4>
                  <h4 className="font-medium  text-xs text-gray-500">
                    tamamhudaaa@gmail.com
                  </h4>
                </div>
              </div>
              <div
                className={` h-full overflow-hidden transition-all ${
                  sidebarActive ? "scale-100 ml-5" : "scale-0 w-0 ml-0"
                }`}
              >
                <ChevronUp size={18} />
              </div>
            </div>
          </nav>
        </aside>
      )}
    </>
  );
};

export default React.memo(Sidebar);
