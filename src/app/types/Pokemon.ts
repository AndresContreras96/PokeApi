interface Ability {
  ability: {
    name: string;
  };
}

interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Stats {
  stat: {
    name: string;
    url: string;
  };
  base_stat: number;
}

export interface Pokemon {
  abilities: Ability[];
  sprites: {
    front_default: string;
  };
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Types[];
  stats: Stats[];
}
