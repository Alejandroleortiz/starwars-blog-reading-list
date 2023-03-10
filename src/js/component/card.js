import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";


const Card= (props) => {
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card my-4" style={{ width: "18rem" }}>
            <img
              src="https://dummyimage.com/400x200/cccccc/f2f2f2.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.descripOne}</p>
              <p className="card-text">{props.descripTwo}</p>
              <p className="card-text">{props.descripThree}</p>
              <div className="d-flex justify-content-between px-2">
                <Link to="/demo">
                  <a href="#" className="btn btn-outline-primary">
                    Learn More!
                  </a>
                </Link>
                <button type="button" class="btn btn-outline-warning">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

checkPropTypes = {
title: checkPropTypes.string,
descripOne: checkPropTypes.string,
descripTwo: checkPropTypes.string,
descripThree: checkPropTypes.string,
}

export default Card;
