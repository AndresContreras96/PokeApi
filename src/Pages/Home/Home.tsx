import React from "react";
import "../Home/Home.css";
import {
  useGetPokemonQuery,
  useGetPokemonsQuery,
} from "../../app/services/pokemonApi";
import Record from "../../components/Record/Record";
import calculateLimit from "../../utils/calculateLimit";
import calculateOffset from "../../utils/calculateOffset";
import PokemonView from "../../components/PokemonView/PokemonView";
import { useSearchParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const MAX_ELEMENTS = 150;
const LOADS_PER_PAGE = 20;

const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get("page");
  const queryName = searchParams.get("name") || "";

  const maxPages = Math.ceil(MAX_ELEMENTS / LOADS_PER_PAGE);

  const getPage = () => {
    if (queryPage) {
      return Number(queryPage) > maxPages ? maxPages : Number(queryPage);
    }
    return 1;
  };

  const page = getPage();

  const offset = calculateOffset(page, LOADS_PER_PAGE);
  const limit = calculateLimit(offset, LOADS_PER_PAGE, MAX_ELEMENTS);
  const { data: pokemonList, isFetching: isFetchingList } = useGetPokemonsQuery(
    { offset, limit }
  );

  const { data: pokemonData } = useGetPokemonQuery(queryName, {
    skip: !queryName,
  });

  const incrementPage = () => {
    searchParams.delete("page");
    searchParams.append("page", `${page + 1}`);
    setSearchParams(searchParams);
  };
  const decrementPage = () => {
    searchParams.delete("page");
    searchParams.append("page", `${page - 1}`);
    setSearchParams(searchParams);
  };

  return (
    <Layout
      sideElement={
        <PokemonView
          pictureSrc={pokemonData && pokemonData.sprites["front_default"]}
        ></PokemonView>
      }
    >
      <div className="container">
        <div className="table">
          {isFetchingList && <div>...Loading</div>}
          {pokemonList &&
            pokemonList.results.map((el) => (
              <Record key={el.name} name={el.name} />
            ))}
        </div>
        <div className="button-container">
          <button onClick={decrementPage} disabled={page === 1}>
            back
          </button>
          <span>
            {page}/{maxPages}
          </span>
          <button onClick={incrementPage} disabled={page === maxPages}>
            next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
