import React, { useEffect } from "react";
import Apps from "../../Apps";
import { useDispatch } from "react-redux";
import { setActive } from "../../Apps/features/layout";

const Tourguide = ({ type }) => {
  return (
    <Apps type={type}>
      <h1>Tourguide Page</h1>
    </Apps>
  );
};

export default Tourguide;
