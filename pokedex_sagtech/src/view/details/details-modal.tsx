import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './details-modal-style.module.scss';
import {
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesByNameQuery,
} from '../../lib/rtk-reducer';
import CloseBtn from '../../components/ui/close-btn/close-btn';
import PokemonTypes from '../../components/component/pokemon/types/pokemon-types';
import PokemonStats from '../../components/component/pokemon/stats/pokemon-stats';
import PokemonFlavorText from '../../components/component/pokemon/flavor-text/pokemon-flavor';
import PokemonTable from '../../components/component/pokemon/table/pokemon-table';

function DetailsModal() {
  const [searchParams] = useSearchParams();
  const { pokeName } = useParams();
  const pokemon_species = useGetPokemonSpeciesByNameQuery(pokeName ?? '');
  const pokemon = useGetPokemonByNameQuery(pokeName ?? '');

  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`/?${searchParams}`);
  };
  return (
    <div id="details" className={`${styles.detailContainerOverlay}`}>
      {pokemon_species.isLoading ? (
        'Loading...'
      ) : (
        <div className={`${styles.itemContainer}`}>
          <div className={styles.headSection}>
            <h3>
              {pokemon.data.name.charAt(0).toUpperCase() +
                pokemon.data.name.slice(1)}
            </h3>
            <CloseBtn onClick={handleClose} />
          </div>
          <div className={styles.contentSection}>
            <div className={styles.pokeImgContainer}>
              <img
                alt="pokemon-pic"
                src={
                  pokemon.data.sprites.other['official-artwork'].front_default
                }
              />
              <PokemonStats stats={pokemon.data.stats} />
            </div>

            <div className={styles.nameTypeContainer}>
              <PokemonFlavorText pokemonSpecies={pokemon_species.data} />
              <PokemonTable
                pokemonDetails={pokemon.data}
                pokemonSpecies={pokemon_species.data}
              />
              Type
              <PokemonTypes types={pokemon.data.types} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsModal;
