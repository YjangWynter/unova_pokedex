// original JS code
const axios = require('axios');
//URL for pokemon API's list of all pokemon from the Unova region
const pokedex = 'https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156/';


//async functions
// retrieves a list of objects containing all the urls for the Unova Pokedex
async function getPokemon() {
    //console.log("Entered 1st function");
    return axios(pokedex).then(response => response.data.results).catch((error) => console.log(`Error #1: ${error}`));
};
//selects a random url to read the pokemon's data from the promise
const url = getPokemon().then((res) =>  randomPokemon(res));

//fetches url then uses takes the response 
async function printPokemon(url) {
    let data = await url;
    return axios(data).then((pokemon) => format(pokemon.data)).catch((error) => console.log(`Error #2: ${error}`));
}
// Prints pokemon to the console
printPokemon(url);
//called by url promise to select a random pokemon
function randomPokemon(pokedex) {
    let num = Math.floor((Math.random() * 156) + 1);
    let pokemon = pokedex[num].url;
    return pokemon
}
// outputs a formatted response after randomizing the pokemon and its move.
function format(pokemon) {
    //formatting the name of the pokemon to capitalize the first letter
    let name = capitalize(pokemon.name)
    //set a random move
    let move = randomMove(pokemon);
    //print to the console the pokemon's id, name,and its random move
    console.log(`Pokemon #${pokemon.id}, ${name}, used ${move}!`);
}
function randomMove(pokemon) {
    //generate a random number
    let move_num = Math.floor((Math.random() * pokemon.moves.length) + 1);
    //select the move with move number
    let move_name = pokemon.moves[move_num].move.name;
    //capitalize the move name
    let move = capitalize(move_name);
    //return move
    return move;
}

function capitalize(name){
    let cap_name = name.charAt(0).toUpperCase() + name.slice(1);
    return cap_name;
}

