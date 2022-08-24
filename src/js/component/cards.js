import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const Cards = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card d-inline-block" style={{width: "18rem"}}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Characters</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          View Info
        </a>
      </div>
    </div>
  );
};
export default Cards;
