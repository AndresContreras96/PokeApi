import React from "react";
import { useGetPokemonQuery } from "../../app/services/pokemonApi";
import PokemonView from "../../components/PokemonView/PokemonView";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "../Details/Details.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Details = () => {
  let { name } = useParams();
  const { data, isFetching } = useGetPokemonQuery(name || "");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Layout
      sideElement={
        <PokemonView
          pictureSrc={data && data.sprites["front_default"]}
        ></PokemonView>
      }
    >
      <div className="details-container">
        <button className="button" onClick={handleGoBack}>
          Go back
        </button>
        {isFetching && <div>...Loading</div>}
        {data && (
          <div className="main-container">
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
        )}
      </div>
    </Layout>
  );
};

export default Details;
