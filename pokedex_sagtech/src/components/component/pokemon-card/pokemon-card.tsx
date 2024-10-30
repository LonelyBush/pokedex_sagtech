import { NavLink } from 'react-router-dom';
import style from './pokemon-card-style.module.scss';
import pokeballStatic from '../../../assets/pics/pokeball.png';
import { useGetPokemonByNameQuery } from '../../../lib/rtk-reducer';
import PokemonTypes from '../pokemon-types/pokemon-types';

function PokemonCard({ poke_name }: { poke_name: string }) {
  const { data, isLoading } = useGetPokemonByNameQuery(poke_name || '');

  return (
    <div className={style.pokemonCardContainer}>
      {isLoading ? (
        <img
          className={style.loadingPropImg}
          src={pokeballStatic}
          alt="pokeball"
        />
      ) : (
        <>
          <NavLink
            to={`/details/${data.name}`}
            className={({ isActive, isPending }) =>
              isPending
                ? `${style.pokemonCardContent} ${style.pending}`
                : isActive
                  ? `${style.pokemonCardContent} ${style.active}`
                  : `${style.pokemonCardContent}`
            }
          >
            <img
              className={style.smallPokeImg}
              src={data.sprites.other['official-artwork'].front_default}
              alt="small-poke-img"
            />
          </NavLink>
          <div className={`${style.nameTypesWrapper}`}>
            <div className={style.nameBlockWrapper}>
              <p>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
            </div>
            <PokemonTypes types={data.types} />
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonCard;
