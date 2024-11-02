import { Outlet } from 'react-router-dom';
import Header from '../../component/header/header';
import PokemonsList from '../../component/pokemon/list/pokemon-list';
import SearchBar from '../../component/search-bar/search-bar';

function Main() {
  return (
    <>
      <Header />
      <SearchBar />
      <PokemonsList />
      <Outlet />
    </>
  );
}

export default Main;
