import React, { useContext } from "react";
import { AppContext } from "../../data/Store";
import "./imgPokemon.css";

interface ImgPokemonProps {
  pokedex: number
  spritePokemon: string
}

export default function ImgPokemon(props: ImgPokemonProps) {
  const { pokedex, spritePokemon } = props;
  const { acertou, errou } = useContext(AppContext);
  const colorImg = {
    filter: (acertou || errou) ? "brightness(100%)" : "brightness(0%)",
    transition: (acertou || errou) ? "0s" : "0.3s",
  };

  return (
    <>
      <img
        className="img_pokemon"
        src={spritePokemon}
        alt={`${pokedex}`}
        style={colorImg}
      />
    </>
  );
}
