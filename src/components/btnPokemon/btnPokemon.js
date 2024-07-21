import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import "./btnPokemon.css";
import { AppContext } from "../../data/Store";
export default function BtnPokemon(props) {
    const { nomePokemon } = props;
    const { nome, setAcertou, setErrou } = useContext(AppContext);
    const verificarNomePokemon = () => {
        if (nomePokemon === nome) {
            setAcertou(true);
        }
        else {
            setAcertou(false);
            setErrou(true);
        }
    };
    return (_jsx(_Fragment, { children: _jsx("button", { onClick: verificarNomePokemon, type: "submit", className: "button-87", children: "Pronto" }) }));
}
