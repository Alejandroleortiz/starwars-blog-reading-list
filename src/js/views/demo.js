import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import Card from "../component/card";
import DescriptionCard from "../component/DescriptionCard";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <DescriptionCard />
    </>
  );
};
