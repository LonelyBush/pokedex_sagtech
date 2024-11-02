import { ChangeEvent, useState } from 'react';
import Button from '../../ui/button/button';
import Input from '../../ui/input/input';
import style from './search-bar-style.module.scss';
import { Form, useSearchParams } from 'react-router-dom';
import Select from '../../ui/select/select';
import { pokemonTypes } from './pokemon-types-const';

function SearchBar() {
  const [searchParams] = useSearchParams();
  const paramsQuery = searchParams.get('search');
  const paramsType = searchParams.get('type');
  const [searchQuery, setSearchQuery] = useState<string>(paramsQuery ?? '');
  const [type, setType] = useState<string>(paramsType ?? '');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.currentTarget.value);
  };

  return (
    <div className={style.searchBarWrapper}>
      <Form method="get" action="/" className={style.searchForm}>
        <Input
          name="search"
          placeholder="Type pokemon name..."
          value={searchQuery}
          onChange={handleInputChange}
          type="search"
        />
        <Select
          name="type"
          options={pokemonTypes}
          value={type}
          onChange={handleSelectChange}
        />
        <Button btnType="submit">Search</Button>
      </Form>
    </div>
  );
}

export default SearchBar;
