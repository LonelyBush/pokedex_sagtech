import PokemonCard from '../card/pokemon-card';
import styles from './pokemon-list-style.module.scss';
import useInfiniteFetchScroll from '../../../../hooks/useInfiniteFetchScroll';
import { Pokemon } from '../../../../interfaces/pokeApi-interface';

function PokemonsList() {
  const { pokemonList, isLoading, isError, error } = useInfiniteFetchScroll();

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <div>Error loading Pokémon list: {JSON.stringify(error)}</div>;
  }

  return (
    <div className={`${styles.pokemonListContainer}`}>
      {pokemonList && pokemonList.length === 0
        ? 'No Pokémon found.'
        : pokemonList.map((elem: Pokemon, index: number) => {
            return (
              <PokemonCard
                key={elem.url}
                id={`${index}`}
                poke_name={elem.name}
              />
            );
          })}
    </div>
  );
}
export default PokemonsList;
