import React, { useContext, useEffect } from "react";
import { AppContext } from "../../data/Store.";
import "./imgPokemon.css";

interface ImgPokemonProps {
  pokedex: number
  spritePokemon: string
}

export default function ImgPokemon(props: ImgPokemonProps) {
  const { pokedex, spritePokemon } = props;
  const { acertou } = useContext(AppContext);

  useEffect(() => {
    console.log(acertou);
  }, [acertou]);
  const colorImg = {
    filter: acertou ? "brightness(100%)" : "brightness(0%)",
    transition: acertou ? "0s" : "0.3s",
  };

  return (
    <>
      <img
        className="img_pokemon"
        src={spritePokemon}
        alt={pokedex}
        style={colorImg}
      />
    </>
  );
}
