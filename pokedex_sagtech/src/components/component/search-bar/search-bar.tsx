import { ChangeEvent, useState } from 'react';
import Button from '../../ui/button/button';
import Input from '../../ui/input/input';
import style from './search-bar-style.module.scss';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };
  return (
    <div className={style.searchBarWrapper}>
      <form className={style.searchForm}>
        <Input
          name="search-input"
          placeholder="Type pokemon name..."
          value={searchQuery}
          onChange={handleInputChange}
          type="text"
        />
        <Button btnType="submit">Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
