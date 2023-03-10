import React, { useState, useEffect, useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

const Characters = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {store.characters?.results.map((character) => {
        return <Card {...character.properties} />;
      })}
    </div>
  );
};

export default Characters;
