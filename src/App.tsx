import React from "react";
import ContainerPokemon from "./components/containerPokemon/containerPokemon";
import ModalInfo from "./components/modal/ModalInfo";
import "./App.css";
import "../public/fonts/pokemon-font.css";
import Store from "./data/Store";


function App() {

  return (
    <Store>
        <main>
          <section className="container_Pokemon">
            <ContainerPokemon />
          </section>
          <section className="section_invisible"><ModalInfo/> </section>
        </main>
    </Store>
  );
}

export default App;
