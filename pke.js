const block = document.getElementById("galleryblock");
const numberOfPokemons = 100;

function fetchingPokemons(){
	for (var i = 1; i <= numberOfPokemons; i++) {
		getPokemon(i);
	}
}
const getPokemon = async i => {
	const url = "https://pokeapi.co/api/v2/pokemon/"+i;
	const res = await fetch(url);
	const pokemon = await res.json();

	const gallery = document.createElement("DIV");
	block.appendChild(gallery);
	gallery.classList.add("gallery");

	const image = document.createElement("IMG");
	gallery.appendChild(image);
	image.setAttribute("src", "https://pokeres.bastionbot.org/images/pokemon/"+i+".png");	

	const name = document.createElement("P");
	gallery.appendChild(name);
	name.innerHTML = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	name.classList.add("info");

}
fetchingPokemons();

//const creating = async pokemon =>{

//	newplace.classList.add = "container";

	//var imageOfPokemon = document.createElement("IMG");
	//imageOfPokemon.setAttribute("src", "https://pokeres.bastionbot.org/images/pokemon/"+i+".png");

	
	//btn.innerHTML = pokemon.types[0].type.name;

//}
