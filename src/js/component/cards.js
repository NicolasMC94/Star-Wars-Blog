import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Cards = (props) => {
  const {name} = useParams()
  const { store, actions } = useContext(Context);
  const[single, setSingle] = useState({})
  console.log(store, "cards");
  useEffect(()=>{
    if(name){
      setSingle(props.object.filter(object => object.name === name))
    }
    
  })

  let type = "";
  switch (props.type) {
    case "personas":
      type = "characters";
      return (
        <div className="card cardSize d-inline-block rounded" style={{ width: "18rem" }}>
          <img
            className="card-img-top rounded"
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              props.id +
              ".jpg"
            }
            alt="Card image cap"
            style={{ heith: "100%", width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>Gender: {props.object.gender}</div>
              <div>Hair color: {props.object.hair_color}</div>
              <div>Eye color: {props.object.eye_color}</div>
              <div className="row-direction justify-content-between d-flex">
                <Link to={`/info/${type}/${props.id}`}>
                  <span href="#" className="btn btn-primary">
                    View Info
                  </span>
                </Link>
                <button type="button" className="btn btn-sm btn-warning" onClick={()=>{actions.addToFavorites(props.object.name)}}>
                <i className="bi bi-heart-fill">Corazon</i>
                </button>
              </div>
                
                
            </div>
          </div>
        </div>
      );

    case "planetas":
      type = "planets";
      return (
        <div className="card d-inline-block rounded" style={{ width: "18rem" }}>
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
            style={{ heith: "18rem", width: "18rem%" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>Terrain: {props.object.climate}</div>
              <div>Population: {props.object.population}</div>
              <div className="row-direction justify-content-between d-flex">
                <Link to={`/info/${type}/${props.id}`}>
                  <span href="#" className="btn btn-primary">
                    View Info
                  </span>
                </Link>
                <button type="button" className="btn btn-sm btn-warning"onClick={()=>{actions.addToFavorites(props.object.name)}}>
                  <i className="bi bi-heart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    case "vehiculos":
      type = "vehicles";
      return (
        <div className="card d-inline-block rounded" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={store.vehiclesurl[props.id]}
            alt="Card image cap"
            style={{ heith: "100%", width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>Cost in credits: {props.object.cost_in_credits}</div>
              <div>Model: {props.object.model}</div>
              <div>Manufacturer: {props.object.manufacturer}</div>
              <div className="row-direction justify-content-between d-flex">
                <Link to={`/info/${type}/${props.id}`}>
                  <span href="#" className="btn btn-primary">
                    View Info
                  </span>
                </Link>
                <button type="button" className="btn btn-sm btn-warning" onClick={()=>{actions.addToFavorites(props.object.name)}}>
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
export default Cards;
