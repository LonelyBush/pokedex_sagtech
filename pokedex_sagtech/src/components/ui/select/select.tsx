import { ChangeEvent } from 'react';
import { capitalise } from '../../../utils/capitalise';
import styles from './select-style.module.scss';

function Select({
  name,
  options,
  value,
  onChange,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  name: string;
}) {
  return (
    <select
      onChange={onChange}
      value={value}
      name={name}
      className={styles.selectCustomStyle}
    >
      {options.map((elem) => {
        return (
          <option key={elem} value={elem}>
            {capitalise(elem)}
          </option>
        );
      })}
    </select>
  );
}
export default Select;
