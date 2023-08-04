import React, { useEffect, useState } from "react";
import PokemonService from "../../services/pokemon.service";
import ImgPokemon from "../imgPokemon/imgPokemon";
import InputPokemon from "../inputPokemon/inputPokemon";
import BtnPokemon from "../btnPokemon/btnPokemon";
import "./containerPokemon.css";

export default function ContainerPokemon() {
  const pokemonService = new PokemonService();
  const [pokemonName, SetPokemonName] = useState("");
  const [randomPokemon, setRandomPokemon] = useState<PokemonData | null>(null);

  interface PokemonData {
    name: string;
    sprites: {
      front_default: string;
    };
  }

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário
  };

  useEffect(() => {
    const randomNumber = getRandomNumber(1, 151);

    if (randomNumber) {
      pokemonService
        .getPokemons(randomNumber)
        .then((pokemon: PokemonData) => {
          console.log(pokemon);
          setRandomPokemon(pokemon.sprites.front_default);
          SetPokemonName(pokemon.name);
          console.log(pokemon.name);
        })
        .catch((error: Error) => {
          console.error("Ocorreu um erro ao obter os dados do pokemon:", error);
        });
    }
  }, []);

  return (
    <article className="container">
      <p>Quem é esse Pokemon</p>
      <section className="center_container_pokemon">
        <figure>
          <ImgPokemon
            pokedex={getRandomNumber(1, 151)}
            spritePokemon={randomPokemon}
          />
        </figure>

        <form onSubmit={handleSubmit}>
          <div>
            <InputPokemon />
          </div>
          <div>
            <BtnPokemon nomePokemon={pokemonName} />
          </div>
        </form>
      </section>
    </article>
  );
}
