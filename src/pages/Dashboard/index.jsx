import React, { useEffect } from "react";
import Apps from "../../Apps";
import { useDispatch } from "react-redux";
import { setActive } from "../../Apps/features/layout";

const Dashboard = ({ type }) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setActive(type));
  // }, []);
  return (
    <Apps type={type}>
      <h1>sadasd</h1>
    </Apps>
  );
};

export default Dashboard;
