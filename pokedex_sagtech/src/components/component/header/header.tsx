import { Link, useSearchParams } from 'react-router-dom';
import styles from './header-style.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';

function Header() {
  const [searchParams] = useSearchParams();
  const store = useSelector((state: RootState) => state.favoritesStore);

  return (
    <header className={styles.headerContainer}>
      <h2>Pokedex-app</h2>
      <Link
        className={styles.linkStyles}
        to={`/favorites?${searchParams}`}
      >{`Favorites pokémons: ${store.length}`}</Link>
    </header>
  );
}

export default Header;
