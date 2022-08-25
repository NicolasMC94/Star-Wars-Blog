import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const Cards = (props) => {
  const { store, actions } = useContext(Context);
  let type = "";
  switch (props.type) {
    case "personas":
      type = "personas";
      return (
        <div className="card d-inline-block" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={
              "https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              
              <div>Gender: {props.object.gender}</div>
              <div>Hair color: {props.object.hair_color}</div>
              <div>Eye color: {props.object.eye_color}</div>
              
              <a href="#" className="btn btn-primary">
                View Info
              </a>
            </div>
          </div>
        </div>
      )
      
    case "planetas":
      type = "planetas";
      return (
        <div className="card d-inline-block" style={{ width: "18rem" }}>
          <img
            src={
              props.id == 1
                ? "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                : "https://starwars-visualguide.com/assets/img/planets/" +
                  props.id +
                  ".jpg"
            }
            className="card-img-top customMaxHeight"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>Terrain: {props.object.climate}</div>
              <div>Population: {props.object.population}</div>
              <a href="#" className="btn btn-primary">
                View Info
              </a>
            </div>
          </div>
        </div>
      )

    case "vehiculos":
      type = "vehiculos";
      return (
        <div className="card d-inline-block" style={{ width: "18rem" }}>
          {/* <img
            className="card-img-top"
            src={store.vehiclesurl[props.index]}
            alt="Card image cap"
          /> */}
          <div className="card-body">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>Cost in credits: {props.object.cost_in_credits}</div>,
              <div>Model: {props.object.model}</div>,
              <div>Manufacturer: {props.object.manufacturer}</div>
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
