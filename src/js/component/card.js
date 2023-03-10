import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Character = (props) => {
  

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
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quam explicabo neque qui debitis voluptatibus aliquid, aliquam nobis dignissimos rerum, quas cum incidunt eum provident praesentium! Quo tenetur ipsam error!</p>
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

export default Character;
