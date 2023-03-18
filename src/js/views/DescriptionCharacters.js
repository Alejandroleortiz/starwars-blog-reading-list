import React, {  useEffect, useState } from "react";
import "../../styles/demo.css";
import DescriptionCharacter from "../component/DescriptionCharacter";
import { useParams } from "react-router";

export const DescriptionCharacters = () => {
  const { uid } = useParams();
  const [characters, setCharacters] = useState(null);

  const getCharacter = () => {
    fetch("https://www.swapi.tech/api/people/" + uid)
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCharacter();
  }, [uid]);

  return (
    <>
      <div className="bg-black vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            {characters && (
              <DescriptionCharacter
                name={characters.result.properties.name}
                eye_color={characters.result.properties.eye_color}
                hair_color={characters.result.properties.hair_color}
                gender={characters.result.properties.gender}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
