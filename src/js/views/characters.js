import React, { useState, useEffect } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

const Characters = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {store.characters?.results.map(() => {
        return <Card />;
      })}
    </div>
  );
};

export default Characters;
