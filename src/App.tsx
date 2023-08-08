import React from "react";
import ContainerPokemon from "./components/containerPokemon/containerPokemon";
import ModalInfo from "./components/modal/modalInfo";
import "./App.css";
import "./pokemon-font.css";
import Store from "./data/Store.";
import ToastErro from "./components/toast/toastErro";


function App() {

  return (
    <Store>
        <main>
          <section className="container_Pokemon">
            <ContainerPokemon />
          </section>
          <section className="section_invisible"><ModalInfo/> </section>
          <ToastErro/>
        </main>
    </Store>
  );
}

export default App;
