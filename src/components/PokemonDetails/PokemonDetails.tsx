import React from "react";
import { Pokemon } from "../../app/types/Pokemon";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./PokemonDetails.css";

interface Props {
  data: Pokemon;
}

const PokemonDetails: React.FC<Props> = ({ data }) => {
  return (
    <div className="pokemon-details-container">
      <div className="type">
        <h2>Type</h2>
        <span>
          {data &&
            data.types
              .map((el) => {
                return el.type.name;
              })
              .join("/")}
        </span>
      </div>
      <div className="info">
        <div>Number:{data.id} </div>
        <div>Name: {data.name} </div>
        <div>Height: {data.height}</div>
        <div>Weight: {data.weight}</div>
      </div>
      <div className="stadistics">
        <div className="stats">
          <h2>Stats</h2>
          {data.stats.map((el) => {
            return (
              <div key={el.stat.name} className="stat-container">
                <span>{el.stat.name}</span>
                <div style={{ display: "flex" }}>
                  <span>{el["base_stat"]}</span>
                  <ProgressBar value={el["base_stat"]} maxValue={255} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="abilities">
          <h2>Abilities</h2>
          {data.abilities.map((el) => {
            return <div key={el.ability.name}>{el.ability.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
