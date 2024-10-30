import { Outlet } from 'react-router-dom';
import Header from '../../components/component/header/header';
import PokemonsList from '../../components/component/pokemon/list/pokemon-list';
import SearchBar from '../../components/component/search-bar/search-bar';

function Main() {
  return (
    <div>
      <Header />
      <SearchBar />
      <PokemonsList />
      <Outlet />
    </div>
  );
}

export default Main;
