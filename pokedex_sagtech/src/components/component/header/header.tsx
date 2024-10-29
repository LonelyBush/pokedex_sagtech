import { Link } from 'react-router-dom';
import styles from './header-style.module.scss';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <h2>Pokedex-app</h2>
      <Link to={'/favorites'}>Favorites pokemon</Link>
    </header>
  );
}

export default Header;
