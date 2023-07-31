import React,  { useEffect } from "react";
import PokemonService from "../../services/pokemon.service";


export default function containerPokemon() {

  const pokemonService = new PokemonService()

  useEffect(() => {
    pokemonService
      .getPokemons()
      .then((pokemon:object ) => {
        console.log(pokemon);
      })
      .catch((error: Error) => {
        console.error("Ocorreu um erro ao obter os jogos:", error);
      });
    }, [])

  return (
    <article>
      <div className="img_pokemon">

         <p>Quem é esse Pokemon</p>

        

      </div>
    </article>
  );
}
