import styles from './close-btn-style.module.scss';

function CloseBtn({ onClick }: { onClick: () => void }) {
  return (
    <button className={`${styles.closeBtn}`} onClick={onClick} type="button" />
  );
}

export default CloseBtn;
