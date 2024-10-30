import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postSlice = createSlice({
  name: 'favoritesStore',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removePokemon: (state, action) => {
      return state.filter((elem) => {
        return elem.name !== action.payload.name;
      });
    },
    removeAllPokemons: () => {
      return [];
    },
  },
});

export const { addPokemon, removePokemon, removeAllPokemons } =
  postSlice.actions;

export default postSlice.reducer;
