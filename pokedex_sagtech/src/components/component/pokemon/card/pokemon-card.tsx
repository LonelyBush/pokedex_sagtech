import { NavLink } from 'react-router-dom';
import style from './pokemon-card-style.module.scss';
import pokeballStatic from '../../../../assets/pics/pokeball.png';
import { useGetPokemonByNameQuery } from '../../../../lib/rtk-reducer';
import PokemonTypes from '../types/pokemon-types';
import CheckBox from '../../../ui/check-box/check-box';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../lib/store';
import { useDispatch } from 'react-redux';
import { addPokemon, removePokemon } from '../../../../lib/favorites-reducer';

function PokemonCard({ id, poke_name }: { id: string; poke_name: string }) {
  const store = useSelector((state: RootState) => state.favoritesStore);
  const dispatch = useDispatch();

  const { data, isLoading } = useGetPokemonByNameQuery(poke_name || '');
  const [checked, setChecked] = useState<boolean>(false);

  const HandleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    dispatch(
      e.currentTarget.checked
        ? addPokemon({ id, poke_name })
        : removePokemon({ id, poke_name }),
    );
  };

  useEffect(() => {
    if (data) {
      setChecked(
        store.find((elem) => elem.poke_name === data.name) !== undefined,
      );
    }
  }, [data, store]);
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
              <CheckBox
                onChange={HandleOnChange}
                checked={checked}
                name={data.name}
                id={`${data.name}-${id}`}
              />
            </div>
            <PokemonTypes types={data.types} />
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonCard;
