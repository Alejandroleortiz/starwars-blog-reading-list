import React from "react";
import "../../styles/home.css";
import Card from "../component/card";
import Planets from "../component/Planets";
import { Context } from "../store/appContext";
import { useContext } from "react";


export const Home = () => {
  const { store, actions } = useContext(Context);
  return (

    <>
      <div className="bg-black">
        <div className="container">
          <h1 className="text-white font-monospace pt-4">Characters</h1>
          <hr className="bg-light"/>
          <div className="row">
            {
              !!store.characters &&
              store.characters?.results.map((character) => {
                console.log(character);
                return (<div className="col-md-3"><Card  {...character.properties} /></div>)
              })
            }
          </div>
        </div>

        <div className="container">
          <h1 className="text-white font-monospace py-4">Planets</h1>
          <div className="row">
            {
              !!store.planets &&
              store.planets?.results.map((planet) => {
                console.log(planet);
                return (<div className="col-md-3"><Planets  {...planet.properties} /></div>)
              })
            }
          </div>
        </div>
      </div>
    </>
  )
};
