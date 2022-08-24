import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark bg-opacity-75 mb-4">
			<Link to="/">
				<div className="ms-2">
					<img src={logo} height={75} />
				</div>				
			</Link>
			
			<div className="dropdown me-3">
					<button className="dropdown-toggle btn btn-primary" type="button" id="favoritesButton" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu me-3">
						<p>Hey</p>
					</ul>
			</div>
		</nav>
	);
};
