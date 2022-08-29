import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Details = () => {
  const parametro = useParams();
  const { store, actions } = useContext(Context);
  const character = store[parametro.type][parametro.id - 1];

  //arreglar lo del + - 1

  return (
    <div className="container justify-content-center">
      <div className="card detailsCards text-center">
        <div className="card-header">Details</div>
        <div className="card-body">
          {parametro.type == "vehicles" ? (
            <img
              className="card-img-top"
              src={store.vehiclesurl[parametro.id]}
              alt="Card image cap"
              style={{ heith: "25%", width: "25%" }}
            />
          ) : (
            <img
              className="card-img-top rounded"
              src={
                "https://starwars-visualguide.com/assets/img/" +
                parametro.type +
                "/" +
                parametro.id +
                ".jpg"
              }
              alt="Card image cap"
              style={{ heith: "25%", width: "25%" }}
            />
          )}
          <br />
          <br />
          <h5 className="card-title">{character?.name}</h5>
          {parametro?.type == "characters" ? (
            <div className="d-flex flex-row justify-content-evenly">
              <div>
                <p className="card-text">Gender: {character?.gender}</p>
              </div>
              <div>
                <p className="card-text">Hair color: {character?.hair_color}</p>
              </div>
              <div>
                <p className="card-text">Eye color: {character?.eye_color}</p>
              </div>
            </div>
          ) : null}

          {parametro?.type == "planets" ? (
            <div className="d-flex flex-row justify-content-evenly">
              <div>
                <p className="card-text">Climate: {character?.climate}</p>
              </div>
              <div>
                <p className="card-text">Population: {character?.population}</p>
              </div>
            </div>
          ) : null}

          {parametro?.type == "vehicles" ? (
            <div className="d-flex flex-row justify-content-evenly">
              <div>
                <p className="card-text">
                  Cost_in_credits: {character?.cost_in_credits}
                </p>
              </div>
              <div>
                <p className="card-text">Model: {character?.model}</p>
              </div>
              <div>
                <p className="card-text">Manufacturer: {character?.manufacturer}</p>
              </div>
            </div>
          ) : null}
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
