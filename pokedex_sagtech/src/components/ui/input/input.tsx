import { ChangeEvent } from 'react';
import style from './input-style.module.scss';

function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
}: {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={style.formInput}
    />
  );
}

export default Input;
