import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './rtk-reducer';
import postsReducer from './favorites-reducer';

const rootReducer = combineReducers({
  favoritesStore: postsReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
      }).concat(pokemonApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
