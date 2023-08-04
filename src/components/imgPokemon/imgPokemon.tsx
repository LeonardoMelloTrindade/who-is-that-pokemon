import React, { useContext, useEffect } from "react";
import DataContext from "../../data/DataContext";
import "./imgPokemon.css";

export default function ImgPokemon(props: any) {
  const { pokedex, spritePokemon } = props;
  const context = useContext(DataContext);
  const acertou = context.pokemon.acertou; 

  useEffect(() => {
    console.log(acertou)
  }, [acertou])
  const colorImg = {
    filter: acertou ? "brightness(100%)" : "brightness(0%)",
    transition: acertou ? "0s" : "0.3s"
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
