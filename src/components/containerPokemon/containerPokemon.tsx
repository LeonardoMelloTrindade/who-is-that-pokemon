import React, { useEffect, useState } from "react";
import PokemonService from "../../services/pokemon.service";
import ImgPokemon from "../imgPokemon/imgPokemon";
import InputPokemon from "../inputPokemon/inputPokemon";
import BtnPokemon from "../btnPokemon/btnPokemon";
import "./containerPokemon.css";

export default function ContainerPokemon() {
  const pokemonService = new PokemonService();
  const [pokemonName, SetPokemonName] = useState("");
  const [randomPokemon, setRandomPokemon] = useState({
    sprites: {},
    front_default: "",
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
          SetPokemonName(pokemon.name);
        })
        .catch((error: Error) => {
          console.error("Ocorreu um erro ao obter os dados do pokemon:", error);
        });
    }
  }, []);

  return (
    <article>
        <p>Quem é esse Pokemon</p>
        <section className="center_container_pokemon">
          <figure>
            <ImgPokemon
              pokedex={getRandomNumber(1, 151)}
              spritePokemon={randomPokemon.front_default}
           />
          </figure>

          <form>
           <InputPokemon />
           
          </form>
          <div>
          <BtnPokemon />
          </div>
        </section>
    </article>
  );
}
