import React from "react";
import ContainerPokemon from "./components/containerPokemon/containerPokemon";
import "./App.css";
import "./pokemon-font.css";
import Store from "./data/Store.";

function App() {

  return (
    <Store>
        <main>
          <section className="container_Pokemon">
            <ContainerPokemon />
          </section>
          <section></section>
        </main>
    </Store>
  );
}

export default App;
