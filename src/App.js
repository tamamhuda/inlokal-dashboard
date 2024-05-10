/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setApi } from "./Apps/features/api";
import storage from "redux-persist/lib/storage/session";
import Apps from "./Apps";
import { Helmet } from "react-helmet-async";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages";
import { appRoutes } from "./Apps/config/appRoutes";

const App = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const api = useSelector((state) => state.auth.api);
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(true);

  // useEffect(() => {
  //   console.log(api);
  // }, [api]);

  useEffect(() => {
    document.title = "Inlokal Trip";

    // appRoutes.map((routes)=> {
    //   if (routes)
    // })
    // console.log(appRoutes[0]);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Inlokal Trip</title>
      </Helmet>

      <Routes>
        {appRoutes.map((route) => {
          return Object.keys(route).reduce((acc, key) => {
            if (key === "apps" && authenticated) {
              return route.apps.map(({ path, Element, type }) => (
                <Route
                  type={path}
                  exact
                  path={path}
                  element={<Element type={type} />}
                />
              ));
            } else {
              return (
                !authenticated &&
                key === "auth" &&
                route.auth.map(({ path, Element, label }) => (
                  <Route key={path} exact path={path} element={<Element />} />
                ))
              );
            }
          }, {});
        })}
      </Routes>
      {/* <Apps /> */}
      {/* {appRoutes.map(({ apps, auth }) => {
        <Routes>
          {authenticated
            ? apps.map((route) => {
                return (
                  // <Route exact path={route.path} element={route.component} />
                  <h1 key={route.path}>{route.path}</h1>
                );
              })
            : auth.map((route) => {
                return (
                  <h1 key={route.path}> {route.path}</h1>
                  // <Route exact path={route.path} element={route.component} />
                );
              })}
        </Routes>;
      })} */}
      {/* {authenticated ? (
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Apps />} />
          <Route exact path="/dashboard" element={<Apps />} />
          <Route
            exact
            path="/login"
            element={<Navigate replace to={"/dashboard"} />}
          />
          <Route
            exact
            path="*"
            element={<Navigate replace to={"/dashboard"} />}
          />
        </Routes>
      )} */}
    </div>
  );
};

export default App;
