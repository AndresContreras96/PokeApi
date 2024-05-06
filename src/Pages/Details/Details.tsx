import React from "react";
import { useGetPokemonQuery } from "../../app/services/pokemonApi";
import PokemonView from "../../components/PokemonView/PokemonView";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "../Details/Details.css";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";

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
        {isFetching && (
          <div style={{ textAlign: "center", width: "100%" }}>...Loading</div>
        )}
        {data && <PokemonDetails data={data} />}
      </div>
    </Layout>
  );
};

export default Details;
