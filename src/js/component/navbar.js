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

      <div className="dropdown me-3">
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
          className="dropdown-menu bg-warning"
          aria-labelledby="dropdownMenuButton1"
        >
          {store.favorites.map((favorite, index) => {
            return <p key={index}>{favorite}</p>;

            <li className="d-flex">
              <a className="dropdown-item" href="#">
                {item}
              </a>
              <i
                className="fa-solid fa-x"
                onClick={() => {
                  actions.deleteFavorite(index);
                }}
              ></i>
            </li>;
          })}
        </ul>
      </div>
    </nav>
  );
};
