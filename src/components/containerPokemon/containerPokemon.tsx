import React, { useEffect, useState } from "react";
import PokemonService from "../../services/pokemon.service";
import './containerPokemon.css'

export default function ContainerPokemon() {
  const pokemonService = new PokemonService();
  const [randomPokemon, setRandomPokemon] = useState({
    sprites: {},
    front_default: ''
  });

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const randomNumber = getRandomNumber(1, 151);
    console.log(randomNumber);

    if (randomNumber) {
      pokemonService
        .getPokemons(randomNumber)
        .then((pokemon: object) => {
          console.log(pokemon);
          setRandomPokemon(pokemon.sprites);
        })
        .catch((error: Error) => {
          console.error("Ocorreu um erro ao obter os dados do pokemon:", error);
        });
    }
  }, []);

  return (
    <article>
      <div className="img_pokemon_container">
        <p>Quem é esse Pokemon</p>
          <span>
            <img className="img_pokemon" src={randomPokemon.front_default} />
          </span>
      
      </div>
    </article>
  );
}
