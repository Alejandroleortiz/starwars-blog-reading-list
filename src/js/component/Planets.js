import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";
import { Context } from "../store/appContext";
import { useContext } from "react";

function Planets(props) {
  const { store, actions } = useContext(Context);

  const handleAddFavorite = () => {
    actions.addFavorite(props.name);
  };

  return (
    <div className="card my-4" style={{ width: "18rem" }}>
      <img
        src="https://dummyimage.com/400x200/cccccc/f2f2f2.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props?.name}</h5>
        <p className="card-text my-0">Population: {props?.population}</p>
        <p className="card-text my-0">Terrain: {props?.terrain}</p>
        <div className="d-flex justify-content-between mt-4">
          <Link to="/demo" className="btn btn-outline-primary">
            Learn More!
          </Link>
          <button
            type="button"
            className="btn btn-outline-warning"
            disabled={store.favorites.includes(props.name)}
            onClick={handleAddFavorite}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
}

checkPropTypes = {
  name: checkPropTypes.string,
  population: checkPropTypes.string,
  terrain: checkPropTypes.string,
};

export default Planets;
