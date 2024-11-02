import { useEffect, useState } from 'react';
import { useGetAllPokemonsQuery } from '../lib/rtk-reducer';
import { Pokemon } from '../interfaces/pokeApi-interface';
import getFilteredData from '../utils/get-filtered-data';
import { useSearchParams } from 'react-router-dom';

function useInfiniteFetchScroll() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const typeQuery = searchParams.get('type');

  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error, isFetching } =
    useGetAllPokemonsQuery(1302);
  const filteredPokemons = getFilteredData(
    searchQuery ?? '',
    typeQuery ?? '',
    (data?.results as Pokemon[]) ?? [],
  );
  const pokemonList: Pokemon[] = filteredPokemons.slice(0, page * 20) ?? [];
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom) {
        const nextPage = page + 1;
        setPage(nextPage);
      }
    };

    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);
  return { pokemonList, isLoading, isError, error };
}

export default useInfiniteFetchScroll;
