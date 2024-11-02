import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonData, PokeType } from '../interfaces/pokeApi-interface';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: (num: number) => `pokemon?offset=0&limit=${num}`,
      transformResponse: async (response: PokemonData) => {
        const resultsWithTypes = await Promise.all(
          response.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            const detailData = await detailResponse.json();
            const { types } = detailData;
            const pokemon_types = types.map((elem: PokeType) => elem.type.name);
            return {
              ...pokemon,
              pokemon_types,
            };
          }),
        );
        return {
          ...response,
          results: resultsWithTypes,
        };
      },
    }),
    getPokemonSpeciesByName: builder.query({
      query: (name: string) => `pokemon-species/${name}`,
    }),
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    getAbilityByNumber: builder.query({
      query: (num: string) => `ability/${num}`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetAbilityByNumberQuery,
  useGetAllPokemonsQuery,
  useGetPokemonSpeciesByNameQuery,
} = pokemonApi;
