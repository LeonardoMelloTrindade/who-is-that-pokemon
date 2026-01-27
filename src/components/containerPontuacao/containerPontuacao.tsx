import { useContext } from "react";
import { AppContext } from "../../store/Store";
import './containerPontuacao.css';

export default function ContainerPontuacao() {
  const { pontuacao } = useContext(AppContext);

  return (
    <section>
      <h1>Sua pontuação atual: {String(pontuacao)}</h1>
    </section>
  );
}
