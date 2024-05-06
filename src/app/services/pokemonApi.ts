import { Pokemon } from "../types/Pokemon";
import { PokemonList } from "../types/PokemonList";
import { baseApi } from "./api";

interface queryParams {
  offset: number;
  limit: number;
}

const pokemonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemons: build.query<PokemonList, queryParams>({
      query: ({ offset, limit }: queryParams) => ({
        url: `pokemon/?offset=${offset}&limit=${limit}`,
      }),
    }),
    getPokemon: build.query<Pokemon, string>({
      query: (name?: string) => ({ url: `pokemon/${name}` }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi;
