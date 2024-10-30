import { PokeSpecies } from '../../../../interfaces/pokeApi-interface';
import styles from './pokemon-flacor-text-style.module.scss';

function PokemonFlavorText({
  pokemonSpecies,
}: {
  pokemonSpecies: PokeSpecies;
}) {
  let flavorTextEn;
  if (pokemonSpecies !== undefined) {
    const { flavor_text_entries } = pokemonSpecies;
    flavorTextEn =
      flavor_text_entries !== undefined
        ? flavor_text_entries
            .find((elem) => elem.language.name === 'en')
            ?.flavor_text.replace('\f', ' ')
        : null;
  }
  return (
    <div className={styles.flavorText}>
      {flavorTextEn !== null ? flavorTextEn : 'Sorry :c No text provided'}
    </div>
  );
}

export default PokemonFlavorText;
