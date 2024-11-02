import style from './loader-style.module.scss';
import pokeballStatic from '../../../assets/pics/pokeball.png';

function Loader() {
  return (
    <img className={style.loadingPropImg} src={pokeballStatic} alt="pokeball" />
  );
}

export default Loader;
