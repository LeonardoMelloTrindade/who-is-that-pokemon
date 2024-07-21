import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import "./inputPokemon.css";
import { AppContext } from "../../data/Store";
export default function InputPokemon() {
    const { nome, setNome } = useContext(AppContext);
    const handleChange = (event) => {
        const updatedValue = event.target.value;
        setNome(updatedValue);
    };
    return (_jsx(_Fragment, { children: _jsxs("article", { className: "boxInput", children: [_jsx("input", { type: "text", required: true, className: "input_pokemon", value: nome, onChange: handleChange }), _jsx("span", { className: "placeholder", children: "nome do pokemon" })] }) }));
}
