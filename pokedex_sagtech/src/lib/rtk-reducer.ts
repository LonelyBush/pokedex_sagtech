import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: (num: string) => `pokemon?offset=${num}&limit=20`,
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
} = pokemonApi;
