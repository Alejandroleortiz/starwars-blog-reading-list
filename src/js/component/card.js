import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";
import { Context } from "../store/appContext";
import { useContext } from "react";

const Card = (props) => {
  
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
        <p className="card-text my-0">Eye color: {props?.eye_color}</p>
        <p className="card-text my-0">Hair color: {props?.hair_color}</p>
        <p className="card-text my-0">Gender: {props?.gender}</p>
        <div className="d-flex justify-content-between mt-4">
          <Link to="/demo">
            <a href="#" className="btn btn-outline-primary">
              Learn More!
            </a>
          </Link>
          <button
            type="button"
            class="btn btn-outline-warning"
            onClick={handleAddFavorite}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

checkPropTypes = {
  name: checkPropTypes.string,
  eye_color: checkPropTypes.string,
  hair_color: checkPropTypes.string,
  gender: checkPropTypes.string,
};

export default Card;
