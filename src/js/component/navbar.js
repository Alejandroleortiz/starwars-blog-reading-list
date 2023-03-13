import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import starWars from "../../img/star-wars-logo.png";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3 py-4">
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
              aria-expanded="false"
            >
              Favorites <span className="badge text-bg-secondary">4</span>
            </button>
            <ul className="dropdown-menu">
              {store.favorites.map((favorite) => {
                return (
                  <li className=" justify-content-between px-2 dropdown-item text-primary">
                    {favorite}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
