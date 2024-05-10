import React, { useEffect } from "react";
import Apps from "../../Apps";
import { useDispatch } from "react-redux";
import { setActive } from "../../Apps/features/layout";

const Place = ({ type }) => {
  return (
    <Apps type={type}>
      <h1>PLACE PAGE</h1>
    </Apps>
  );
};

export default Place;
