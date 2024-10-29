import { ReactNode } from 'react';
import styles from './button-style.module.scss';

function Button({
  btnType = 'button',
  children,
  onClick,
}: {
  btnType: 'submit' | 'reset' | 'button';
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type={btnType === 'button' ? 'button' : 'submit'}
      className={`${styles.submitBtn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
