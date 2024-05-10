import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import Sidebar from "../components/Sidebar";
import SideBarItem from "../components/Sidebar/SideBarItem";

import { useDispatch, useSelector } from "react-redux";
import { setActive } from "./features/layout";
// import { Route, Routes } from "react-router-dom";
// import { appRoutes } from "./config/appRoutes";
import Navbar from "../components/Navbar";
import Page from "../components/Page";

const Apps = ({ children, type }) => {
  const sidebar = useSelector(({ inlokal }) => inlokal.layout.sidebar);
  const sidebarActive = useSelector(
    ({ inlokal }) => inlokal.layout.sidebarActive
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (type) {
      dispatch(setActive(type));
    } else dispatch(setActive("dashboard"));
  }, []);

  // useEffect(() => {

  // }, []);

  // useEffect(() => {

  // }, []);

  const clickMenu = useCallback((type) => {
    dispatch(setActive(type));
  }, []);

  const handlerClickMenu = useMemo(() => {
    return function (type) {
      console.log(type);
      dispatch(setActive(type));
    };
  }, []);

  return (
    <div className="flex w-screen bg-[#f4f9fa]  h-screen overflow-auto relative">
      <Sidebar>
        {sidebar.map(({ type, label, active, Icon, path }) => {
          return (
            <SideBarItem
              key={type}
              icon={<Icon size={20} />}
              text={label}
              type={type}
              active={active}
              path={path}
              onClick={() => clickMenu(type)}
              sidebarActive={sidebarActive}
            />
          );
        })}
      </Sidebar>

      <div className="flex-1 bg-[#f4f9fa]  items-center justify-center   relative ">
        <Navbar></Navbar>

        <Page>{children}</Page>
      </div>

      {/* <Routes>
        {appRoutes.map(({ path, component, requeresAuth }) => {
          <Route key={path} exact path={path} element={component} />;
        })}
        <Route
          exact
          path={"/"}
          element={() => {
            return (
              <div>
                <h1>User Page</h1>
              </div>
            );
          }}
        />
      </Routes> */}
    </div>
  );
};

export default memo(Apps);
