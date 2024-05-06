interface PokemonInfo {
  name: string;
  url: string;
}

export interface PokemonList {
  results: PokemonInfo[];
  previous: string | null;
  next: string | null;
  count: number;
}
