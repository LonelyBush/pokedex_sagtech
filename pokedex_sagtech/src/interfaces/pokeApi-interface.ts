export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonData {
  results: Pokemon[];
}

export interface PokeType {
  type: {
    name: string;
  };
}
export interface PokeStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokeFlavor {
  language: {
    name: string;
  };
  flavor_text: string;
}

export interface PokeSpecies {
  flavor_text_entries: PokeFlavor[];
  shape: {
    name: string;
  };
}

export interface PokemonDetails {
  name: string;
  types: PokeType[];
  stats: PokeStats[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
  }[];
  height: number;
  weight: number;
}
