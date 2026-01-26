import React, { useEffect, useContext } from "react";
import PokemonService from "../../services/pokemon.service";
import ImgPokemon from "../imgPokemon/imgPokemon";
import InputPokemon from "../inputPokemon/inputPokemon";
import BtnPokemon from "../btnPokemon/btnPokemon";
import { getRandomNumber } from "../../utils/index";
import { AppContext } from "../../store/Store";
import "./containerPokemon.css";

export default function ContainerPokemon() {
  const pokemonService = new PokemonService();
  const { setSpritePokemon, pokemonNameApi, setPokemonNameApi } = useContext(AppContext)

  interface PokemonData {
    name: string;
    sprites: {
      front_default: string;
    };
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário
  };

  useEffect(() => {
    const randomNumber = getRandomNumber(1, 151);

    if (randomNumber) {
      pokemonService
        .getPokemons(randomNumber)
        .then((pokemon: PokemonData) => {
          setSpritePokemon(pokemon.sprites.front_default);
          setPokemonNameApi(pokemon.name.toLowerCase());
          console.log('Nome do pokemon: ', pokemon.name)
        })
        .catch((error: Error) => {
          console.error("Ocorreu um erro ao obter os dados do pokemon:", error);
        });
    }
  }, []);

  return (
    <article className="container_css">
      <p className="font_Pokemon">Quem é esse Pokemon</p>
      <section className="center_container_pokemon">
        <figure>
          <ImgPokemon
            pokedex={getRandomNumber(1, 151)}
          />
        </figure>

        <form onSubmit={handleSubmit}>
          <div>
            <InputPokemon />
          </div>
          <div>
            <BtnPokemon nomePokemon={pokemonNameApi} />
          </div>
        </form>
      </section>
    </article>
  );
}
