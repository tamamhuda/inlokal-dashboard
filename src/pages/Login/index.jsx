import React, { useEffect } from "react";
import { setActive } from "../../Apps/features/layout";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActive("login"));
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1 className="">Login Page</h1>
    </div>
  );
};

export default Login;
