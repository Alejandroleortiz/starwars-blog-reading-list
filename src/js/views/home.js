import React from "react";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (

    <>
  <div className="container">
  <h1 className="text-danger">Characters</h1>
    <div className="row">
      {
        !!store.characters &&
        store.characters?.results.map((character)=>{
          console.log(character);
          return ( <div className="col-md-3"><Card  {...character.properties}/></div> )
        })
      }
    </div>
  </div>
    </>
  )
};
