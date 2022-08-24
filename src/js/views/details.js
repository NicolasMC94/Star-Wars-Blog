import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const Details= () => { 
	const parametro=useParams()
	const { store, actions} = useContext(Context);
	const character= store.character[parametro.id-1]
	

	return (
		<div className="container justify-content-center">
		<div class="card detailsCards text-center">
			<div class="card-header">
				Details
			</div>
			<div class="card-body">
			<img id="imagenDetails" src={character?.image} style={{width: "25rem"}}/>
				<br/>
				<br/>
				<h5 class="card-title">{character?.name}</h5>
				<p class="card-text">{character?.species}</p>
				<p class="card-text">{character?.gender}</p>
				<p class="card-text">{character?.location.name}</p>
				<p class="card-text">{character?.origin.name}</p>
		 		
		 		

			</div>
			<div class="card-footer text-center">
				<Link to={"/"}>
      			<button className="btn btn-link back">Back</button>
    			</Link>
			</div>
		</div>
		</div>


	)
}