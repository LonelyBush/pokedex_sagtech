import { PokeType } from '../../../interfaces/pokeApi-interface';
import styles from './pokemon-types-style.module.scss';

function PokemonTypes({ types }: { types: PokeType[] }) {
  return (
    <div className={styles.pokemonTypeContainer}>
      {types.map((elem) => {
        const { type } = elem;
        return (
          <div
            key={type.name}
            className={`${styles.typeIcon}`}
            data-bg={type.name}
          >
            {type.name.slice(0, 3)}
          </div>
        );
      })}
    </div>
  );
}

export default PokemonTypes;
