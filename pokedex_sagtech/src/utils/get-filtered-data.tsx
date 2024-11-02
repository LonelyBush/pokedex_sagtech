import { Pokemon } from '../interfaces/pokeApi-interface';

const getFilteredData = (
  searchQuery: string,
  typeQuery: string,
  responsedResults: Pokemon[],
): Pokemon[] => {
  const changedQuery = searchQuery.trim().toLowerCase();
  return responsedResults.filter(
    (elem) =>
      elem.name.startsWith(changedQuery) &&
      (typeQuery === '' || elem.pokemon_types.includes(typeQuery)),
  );
};

export default getFilteredData;
