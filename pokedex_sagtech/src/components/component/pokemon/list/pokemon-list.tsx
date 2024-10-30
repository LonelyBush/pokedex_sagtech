import { useGetAllPokemonsQuery } from '../../../../lib/rtk-reducer';
import PokemonCard from '../card/pokemon-card';
import styles from './pokemon-list-style.module.scss';

function PokemonsList() {
  const { data, isLoading, isError, error } = useGetAllPokemonsQuery('0');

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Error loading Pokémon list: {JSON.stringify(error)}</div>;

  return (
    <div className={`${styles.pokemonListContainer}`}>
      {data && data.results.length === 0
        ? 'No Pokémon found.'
        : data.results.map((elem: typeof data.results, index: number) => {
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
