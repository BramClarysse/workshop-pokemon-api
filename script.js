"use strict";

document.addEventListener('DOMContentLoaded', function() {
    fetchPokemon();
});

function fetchPokemon() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=30';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayPokemonNames(data.results);
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
        });
}

function displayPokemonNames(pokemonList) {
    const pokemonListContainer = document.getElementById('pokemon-list');

    pokemonList.forEach(pokemon => {
        const pokemonItem = document.createElement('div');
        pokemonItem.classList.add('pokemon-item');

        const pokemonName = document.createElement('p');
        pokemonName.classList.add('pokemon-name');
        pokemonName.textContent = pokemon.name;

        pokemonItem.appendChild(pokemonName);
        pokemonListContainer.appendChild(pokemonItem);
    });
}
