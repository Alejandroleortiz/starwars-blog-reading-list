import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import starWars from "../../img/star-wars-logo.png";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar  navbar-light bg-light mb-3 py-4 sticky-top">
      <div className="container ">
        <Link to="/">
          <span className="">
            <img alt="Logo" width="120" height="90" src={starWars} />
          </span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Favorites
              <span className="badge text-bg-secondary">
                {store.favorites.length}
              </span>
            </button>
            <ul className="dropdown-menu">
              {store.favorites.map((favorite, index) => {
                return (
                  <div
                    className="d-flex justify-content-between px-2"
                    key={index}
                  >
                    <span>{favorite}</span>
                    <span>
                      <FaTrash onClick={() => actions.deleteFavorite(index)}/>
                    </span>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
