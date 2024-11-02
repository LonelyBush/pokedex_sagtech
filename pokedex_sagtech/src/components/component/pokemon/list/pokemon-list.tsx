import PokemonCard from '../card/pokemon-card';
import styles from './pokemon-list-style.module.scss';
import useInfiniteFetchScroll from '../../../../hooks/useInfiniteFetchScroll';
import { Pokemon } from '../../../../interfaces/pokeApi-interface';
import Loader from '../../loader/loader';
import ErrorBoundary from '../../error-boundary/error-boundary';

function PokemonsList() {
  const { pokemonList, isLoading, isError } = useInfiniteFetchScroll();

  if (isLoading) return <Loader />;
  if (isError) {
    return <ErrorBoundary />;
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
