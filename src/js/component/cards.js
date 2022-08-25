import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const Cards = (props) => {
  const { store, actions } = useContext(Context);
  let type = "";
  switch (props.type) {
    case "people":
      type = "people";
      return (
        <div className="card d-inline-block" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={
              "https://starwars-visualguide.com/assets/img/characters/"}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>
                {type=="people" ?  (
                  <div>Gender: {props.object.gender}</div>,
                  <div>Hair color: {props.object.hair_color}</div>,
                  <div>Eye color: {props.object.eye_color}</div>
                ) : <div></div>}
              </div>
              <a href="#" className="btn btn-primary">
                View Info
              </a>
            </div>
          </div>
        </div>
      )
      
    case "planets":
      type = "planets";
      return (
        <div className="card d-inline-block" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={
              "https://starwars-visualguide.com/assets/img/plantets/" +
              props.contador +
              ".jpg"
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>
                {/* {type=="planets" ?  (
                  <div>Terrain: {props.object.climate}</div>,
                  <div>Population: {props.object.population}</div>
                ) : <div></div>} */}
              </div>
              <a href="#" className="btn btn-primary">
                View Info
              </a>
            </div>
          </div>
        </div>
      )

    case "vehicles":
      type = "vehicles";
      return (
        <div className="card d-inline-block" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={store.vehiclesurl[props.index]}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>
                {/* {type=="vehicles" ?  (
                  <div>Cost in credits: {props.object.cost_in_credits}</div>,
                  <div>Model: {props.object.model}</div>,
                  <div>Manufacturer: {props.object.manufacturer}</div>
                ) : <div></div>} */}
              </div>
              <a href="#" className="btn btn-primary">
                View Info
              </a>
            </div>
          </div>
        </div>
      )
    }
  };    
export default Cards;
