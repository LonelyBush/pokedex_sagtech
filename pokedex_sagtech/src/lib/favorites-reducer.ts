import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PayloadInterface {
  id: string;
  poke_name: string;
}

const initialState: PayloadInterface[] = [];

const postSlice = createSlice({
  name: 'favoritesStore',
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<PayloadInterface>) => {
      state.push(action.payload);
      return state;
    },
    removePokemon: (state, action) => {
      return state.filter((elem) => {
        return elem.poke_name !== action.payload.poke_name;
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
