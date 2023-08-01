import React from "react";
import './imgPokemon.css'

export default function imgPokemon(props: any) {
  const { pokedex,  spritePokemon} = props;

  return (
    <>
      <img className="img_pokemon" src={spritePokemon} alt={pokedex}/>
    </>
  );
}
