import React, { useContext } from "react";
import { AppContext } from "../../store/Store";
import "./imgPokemon.css";

interface ImgPokemonProps {
  pokedex: number
}

export default function ImgPokemon(props: ImgPokemonProps) {
  const { pokedex } = props;
  const { openModal,spritePokemon } = useContext(AppContext);
  const colorImg = {
    filter: openModal ? "brightness(100%)" : "brightness(0%)",
    transition: openModal ? "0s" : "0.3s",
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
