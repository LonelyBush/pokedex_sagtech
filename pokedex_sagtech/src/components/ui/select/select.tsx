import { ChangeEvent } from 'react';
import { capitalise } from '../../../utils/capitalise';
import styles from './select-style.module.scss';

function Select({
  name,
  options,
  value,
  onChange,
  label,
}: {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  name: string;
}) {
  return (
    <label htmlFor={name} className={styles.labelWrapper}>
      {label}
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
    </label>
  );
}
export default Select;
