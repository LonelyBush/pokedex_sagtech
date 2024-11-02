import { ChangeEvent } from 'react';
import style from './input-style.module.scss';

function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label htmlFor={name} className={style.labelWrapper}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={style.formInput}
      />
    </label>
  );
}

export default Input;
