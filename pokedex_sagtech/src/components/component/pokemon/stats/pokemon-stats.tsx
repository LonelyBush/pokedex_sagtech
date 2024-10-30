import { PokeStats } from '../../../../interfaces/pokeApi-interface';
import { iconCollection } from './icons-collections-const';
import styles from './pokemon-stats-style.module.scss';

function PokemonStats({ stats }: { stats: PokeStats[] }) {
  const getOnlyMainStats = stats.filter((elem) => {
    return (
      elem.stat.name !== 'special-defense' &&
      elem.stat.name !== 'special-attack'
    );
  });
  return (
    <div className={styles.statsContainer}>
      {getOnlyMainStats.map((elem) => {
        return (
          <div key={elem.stat.name} className={styles.statBlock}>
            <img
              className={styles.statIcon}
              src={iconCollection[elem.stat.name]}
              alt="stat-icon"
            />
            <div>{`${elem.base_stat}`}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonStats;
