import React,{useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
						{store.favorites.map((favorite, index)=>{
							return <p key={index}>{favorite}</p>
						})}
					</ul>
			</div>
		</nav>
	);
};
