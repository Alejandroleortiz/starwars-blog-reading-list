import React from "react";
import "../../styles/home.css";
import Card from "../component/card";
import Card2 from "../component/card2";
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
        store.characters?.results.map(()=>{
          return ( <div className="col-md-3"><Card/></div> )
        })
      }
    </div>
  </div>
    </>
  )
};
