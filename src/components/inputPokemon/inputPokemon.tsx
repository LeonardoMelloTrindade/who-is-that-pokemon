import React, { useContext } from "react";
import "./inputPokemon.css";
import { AppContext } from "../../data/Store";

export default function InputPokemon() {
  const {nome, setNome} = useContext(AppContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    setNome(updatedValue)
  };
  return (
    <>
      <article className="boxInput">
          <input
            type="text"
            required={true}
            className="input_pokemon"
            value={nome}
            onChange={handleChange}
          />
          <span className="placeholder">nome do pokemon</span>
      </article>
    </>
  );
}
