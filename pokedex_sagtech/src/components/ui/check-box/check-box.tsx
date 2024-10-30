import { ChangeEvent } from 'react';
import { RiStarSFill } from 'react-icons/ri';
import styles from './check-box-style.module.scss';

function CheckBox({
  id,
  name,
  onChange,
  checked,
}: {
  checked: boolean;
  id: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label htmlFor={id} className={`${styles.labelWrapper}`}>
      <input
        name={name}
        onChange={onChange}
        id={id}
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
      />
      <RiStarSFill
        className={
          checked ? `${styles.starIcon} ${styles.check}` : `${styles.starIcon}`
        }
      />
    </label>
  );
}

export default CheckBox;
