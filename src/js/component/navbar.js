import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
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

      <div className="dropstart me-5">
        <button
          className="dropdown-toggle btn btn-primary"
          type="button"
          id="favoritesButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
        >
          {store.favorites.map((favorite, index) => {
            return (
              <li className="d-flex">
                <a className="dropdown-item" href="#">
                  {favorite}
                </a>
                <span
                  className="fa-solid fa-x"
                  onClick={() => {
                    actions.deleteFavorite(index);
                  }}
                >
                  <i className="bi bi-x-lg m-3"></i>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
