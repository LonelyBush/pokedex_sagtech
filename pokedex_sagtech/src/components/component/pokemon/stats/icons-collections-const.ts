import hpIcon from '../../../../assets/svg/heart-icon.svg';
import defIcon from '../../../../assets/svg/shield-icon.svg';
import atackIcon from '../../../../assets/svg/sword-icon.svg';
import speedIcon from '../../../../assets/svg/wing-icon.svg';

interface IconCollectionInterface {
  [key: string]: string;
  hp: string;
  defense: string;
  attack: string;
  speed: string;
}

export const iconCollection: IconCollectionInterface = {
  hp: hpIcon,
  defense: defIcon,
  attack: atackIcon,
  speed: speedIcon,
};
