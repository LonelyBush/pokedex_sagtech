import { useState } from 'react';
import styles from './pokemon-table-style.module.scss';
import CloseBtn from '../../../ui/close-btn/close-btn';
import {
  PokemonDetails,
  PokeSpecies,
} from '../../../../interfaces/pokeApi-interface';
import { useGetAbilityByNumberQuery } from '../../../../lib/rtk-reducer';
import { FaRegCircleQuestion } from 'react-icons/fa6';

function PokemonTable({
  pokemonDetails,
  pokemonSpecies,
}: {
  pokemonDetails: PokemonDetails;
  pokemonSpecies: PokeSpecies;
}) {
  const [show, setShow] = useState<boolean>(false);
  const [ability, setAbility] = useState<string>('');
  const { data } = useGetAbilityByNumberQuery(ability);
  const filteredAbilites = pokemonDetails.abilities.filter(
    (elem) => elem.is_hidden === false,
  );
  let descriptionBlock;
  const handleOpenAbilityDetails = (str: string) => {
    setShow(true);
    setAbility(str);
  };
  const handleCloseAbilityDetails = () => {
    setShow(false);
    setAbility('');
  };
  if (
    data &&
    Object.prototype.hasOwnProperty.call(data, 'flavor_text_entries')
  ) {
    const { name, flavor_text_entries } = data;
    descriptionBlock = (
      <div className={styles.abilityContentBlock}>
        <p className={styles.abilityTitle}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
        <p className={styles.abilityDescription}>
          {flavor_text_entries !== undefined
            ? flavor_text_entries
                .find(
                  (elem: typeof flavor_text_entries) =>
                    elem.language.name === 'en',
                )
                ?.flavor_text.replace('\f', ' ')
            : null}
        </p>
      </div>
    );
  }
  return (
    <div className={`${styles.pokemonTableContainer}`}>
      <div className={styles.pokemonWeightHeightColumn}>
        <div>
          Height
          <p>{pokemonDetails.height / 10} m</p>
        </div>
        <div>
          Weight
          <p>{pokemonDetails.weight / 10} kg</p>
        </div>
      </div>
      <div className={styles.pokemonShapeAbilitiesColumn}>
        {pokemonSpecies.shape !== null && (
          <div>
            Shape
            <p>
              {pokemonSpecies.shape.name.charAt(0).toUpperCase() +
                pokemonSpecies.shape.name.slice(1)}
            </p>
          </div>
        )}

        <div>
          Abilities
          {filteredAbilites.map((elem) => (
            <p
              className={styles.abilityPointerSelect}
              onClick={() => handleOpenAbilityDetails(elem.ability.name)}
              key={elem.ability.name}
            >
              {elem.ability.name.charAt(0).toUpperCase() +
                elem.ability.name.slice(1)}
              <FaRegCircleQuestion />
            </p>
          ))}
        </div>
      </div>
      <div
        className={`${styles.abilityDescriptionBlock} ${show ? styles.open : ''}`}
      >
        <div className={styles.abilityHeaderBlock}>
          Ability info
          <CloseBtn onClick={() => handleCloseAbilityDetails()} />
        </div>
        {descriptionBlock}
      </div>
    </div>
  );
}

export default PokemonTable;
