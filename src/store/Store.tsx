import React, { useState } from "react";
import Data  from "../data/Data";

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext(Data);

const Store: React.FC<Props> = (props) => {
  const [state, setState] = useState(Data);

  function updateState(key: string, value: string | number | boolean) {
  setState((prevState) => ({
    ...prevState,
    [key]: value,
  }));
}


  return (
    <AppContext.Provider
      value={{
        nome: state.nome,
        pokemon: state.pokemon,
        pokedex: state.pokedex,
        errou: state.errou,
        openModal: state.openModal,
        setNome: (n: string) => updateState("nome", n),
        setPokemon: (n: string) => updateState("pokemon", n),
        setPokedex: (n: number) => updateState("pokedex", n),
        setErrou: (n: boolean) => updateState("errou", n),
        setOpenModal: (n: boolean) => updateState("openModal", n)
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
