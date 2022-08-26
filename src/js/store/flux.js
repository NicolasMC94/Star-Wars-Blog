const getState = ({ getStore, getActions, setStore }) => {
	let vehiclesIdArray = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
	return {
	  	store: {
			character: [],
			planets: [],
			vehicles: [],
			vehiclesurl: vehiclesIdArray.map(
				(id) =>
				  "https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"
			),
		},
		
		actions: {
			fetchCharacter: () => {
			  fetch("https://swapi.dev/api/people")
				.then((response) => response.json())
				.then((data) => setStore({ character: data.results }));
			},
			fetchPlanets: () => {
			  fetch("https://swapi.dev/api/planets")
				.then((response)=>response.json())
				.then((data)=> setStore({planets: data.results}))
			},
			fetchVehicles:() => {
			  fetch("https://swapi.dev/api/vehicles")
				.then((response)=>response.json())
				.then((data)=>setStore({vehicles:data.results}))
			},
		},
		};
	  };
export default getState;
