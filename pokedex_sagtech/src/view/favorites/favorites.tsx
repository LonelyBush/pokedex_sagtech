import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';
import PokemonCard from '../../components/component/pokemon/card/pokemon-card';
import styles from './favorites-style.module.scss';
import Button from '../../components/ui/button/button';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Favorites() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const store = useSelector((state: RootState) => state.favoritesStore);

  return (
    <div className={styles.favoritesSection}>
      <h2>{`Favorites pokémons: ${store.length}`}</h2>
      <div className={styles.favoritesBlock}>
        {store && store.length === 0
          ? 'No Pokémons in favorites :c'
          : store.map((elem, index: number) => {
              return (
                <PokemonCard
                  key={elem.poke_name}
                  id={`${index}`}
                  poke_name={elem.poke_name}
                />
              );
            })}
      </div>
      <Button btnType="button" onClick={() => navigate(`/?${searchParams}`)}>
        To Main
      </Button>
    </div>
  );
}

export default Favorites;
