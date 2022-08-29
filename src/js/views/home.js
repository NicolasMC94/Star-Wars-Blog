import React, { useEffect, useContext } from "react";
import Cards from "../component/cards";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

   return (
    <div className="container">
      <div className="row d-flex flex-column">
        <h1 className="text-warning py-1">Characters</h1>
        <div className="d-flex overflow-auto">
          {store.characters.map((people, index) => {
            return (<div key={index} className="col-3"> <Cards object={people} type="personas" id={index + 1}/></div>)
          })}
        </div>
      </div>

      <div className="row d-flex flex-column">
        <h1 className="text-warning py-1">Planets</h1>
        <div className="d-flex overflow-auto">
          
            {store.planets.map((planets, index) => (
              <div key={index} className="col-3"> <Cards object={planets} type="planetas" id={index + 1}/> </div>
            ))}
          
        </div>
      </div>

      <div className="row d-flex flex-column">
        <h1 className="text-warning py-1">Vehicles</h1>
        <div className="d-flex overflow-auto">
            {store.vehicles.map((vehicles, index) => (
              <div key={index} className="col-3"> <Cards object={vehicles} type="vehiculos" id={index + 1}/> </div>
            ))}          
        </div>
      </div>
    </div>
  );
};
