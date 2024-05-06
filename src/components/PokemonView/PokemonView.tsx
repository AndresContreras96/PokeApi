import React from "react";
import PokeapiLogo from "../../assets/pokeApiLogo.png";
import "../PokemonView/PokemonView.css";

interface Props {
  pictureSrc?: string;
}

const PokemonView: React.FC<Props> = ({ pictureSrc }) => {
  return (
    <div className="pokemon-view-container">
      <img src={PokeapiLogo} alt="logo"></img>
      {pictureSrc && <img src={pictureSrc} alt="pokemon"></img>}
    </div>
  );
};

export default PokemonView;
