
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import DescriptionCard from "../component/DescriptionCard";
import { useParams } from "react-router"; 

export const CharactersDesc = () => {
  const {uid} = useParams()
  console.log(uid);
  
  const { store, actions } = useContext(Context);
  console.log(JSON.stringify(store)+ " " + "estos son los resultados")

  // useEffect(() => {

  //   state.actions.getCharacter();
  // }, []);

  

  return (
    <>
      <DescriptionCard  name={store?.characters.name} />
    </>
  );
};
