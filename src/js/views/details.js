import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Details = () => {
  const parametro = useParams();
  const { store, actions } = useContext(Context);
  const character = store.character[parametro.id-1];
  //arreglar lo del + - 1

  return (
    <div className="container justify-content-center">
      <div className="card detailsCards text-center">
        <div className="card-header">Details</div>
        <div className="card-body">
          <img
            id="imagenDetails"
            src={character?.image}
            style={{ width: "25rem" }}
          />
          <br />
          <br />
          <h5 className="card-title">{character?.name}</h5>
          <div className="d-flex flex-row justify-content-evenly">
		  	<div><p className="card-text">Gender: {character?.gender}</p></div>
		  	<div><p className="card-text">Hair color: {character?.hair_color}</p></div>
          	<div><p className="card-text">Eye color: {character?.eye_color}</p></div>
          </div>
        </div>
        <div className="card-footer text-center">
          <Link to={"/"}>
            <button className="btn btn-primary back">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
