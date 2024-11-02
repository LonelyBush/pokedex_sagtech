import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './details-modal-style.module.scss';
import {
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesByNameQuery,
} from '../../../lib/rtk-reducer';
import CloseBtn from '../../ui/close-btn/close-btn';
import PokemonTypes from '../../component/pokemon/types/pokemon-types';
import PokemonStats from '../../component/pokemon/stats/pokemon-stats';
import PokemonFlavorText from '../../component/pokemon/flavor-text/pokemon-flavor';
import PokemonTable from '../../component/pokemon/table/pokemon-table';
import { capitalise } from '../../../utils/capitalise';
import Loader from '../../component/loader/loader';

function DetailsModal() {
  const [searchParams] = useSearchParams();
  const { pokeName } = useParams();
  const pokemon = useGetPokemonByNameQuery(pokeName ?? '');
  const pokemon_species = useGetPokemonSpeciesByNameQuery(
    pokemon.data?.species?.name as string,
    { skip: !pokemon.data?.species?.name },
  );

  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`/?${searchParams}`);
  };
  return (
    <div id="details" className={`${styles.detailContainerOverlay}`}>
      {pokemon_species.isLoading ? (
        <Loader />
      ) : (
        <div className={`${styles.itemContainer}`}>
          <div className={styles.headSection}>
            <h3>{capitalise(pokemon.data.name as string)}</h3>
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
