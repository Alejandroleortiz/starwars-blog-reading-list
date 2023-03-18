import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import DescriptionCard from "../component/DescriptionCard";
import { useParams } from "react-router"; 

export const CharactersDesc = () => {
  const { uid } = useParams();
  console.log(uid);

  const { store, actions } = useContext(Context);
  console.log(JSON.stringify(store) + " " + "estos son los resultados");

  const [characters, setCharacters] = useState(null);

  const getCharacter = () => {
    fetch("https://www.swapi.tech/api/people/" + uid)
      .then(res => res.json())
      .then(data => setCharacters(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getCharacter();
  }, [uid]);

  return (
    <>
      {characters && <DescriptionCard 
      name={characters.result.properties.name} 
      eye_color={characters.result.properties.eye_color}
      hair_color={characters.result.properties.hair_color}
      gender={characters.result.properties.gender}
      />}
    </>
  );
};
