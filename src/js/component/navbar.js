import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import starWars from "../../img/star-wars-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 py-4">
			<div className="container ">
				<Link to="/">
					<span className=""><img alt="Logo" width="120" height="90" src={starWars} /></span>
				</Link>
				<div className="ml-auto">

					<div className="dropdown">
						<button type="button" className="btn btn-primary btn-lg" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge text-bg-secondary">4</span>
						</button>
						<ul className="dropdown-menu">
							<div className="d-flex justify-content-between px-2">
							<li><a className="dropdown-item text-primary" href="#">Action </a></li>
							<span className="pe-3"><FaTrash/></span> 
							</div>
						</ul>
					</div>

				</div>
			</div>
		</nav>
	);
};
