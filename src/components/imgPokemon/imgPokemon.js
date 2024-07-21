import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { AppContext } from "../../data/Store";
import "./imgPokemon.css";
export default function ImgPokemon(props) {
    const { pokedex, spritePokemon } = props;
    const { acertou, errou } = useContext(AppContext);
    const colorImg = {
        filter: (acertou || errou) ? "brightness(100%)" : "brightness(0%)",
        transition: (acertou || errou) ? "0s" : "0.3s",
    };
    return (_jsx(_Fragment, { children: _jsx("img", { className: "img_pokemon", src: spritePokemon, alt: `${pokedex}`, style: colorImg }) }));
}
