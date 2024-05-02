import { type ReactElement } from 'react';
import { Text } from '@components/common/Text/Text.tsx';
import './header.scss';
import family from '@assets/home/family.png';

export const Header = (): ReactElement => {
  return (
    <div className="header">
      <div className="header__group">
        <div className="header__subgroup">
          <Text
            className="header__text header__text--title"
            weight="bold"
            family="sonoma">
            Seguro Salud Flexible
          </Text>
          <Text
            className="header__text header__text--subtitle"
            weight="bold"
            family="sonoma">
            Creado para ti y tu familia
          </Text>
        </div>
        <img src={family} alt="family" className="header__image" />
      </div>
      <Text
        className="header__text header__text--description"
        family="sonoma"
        weight="semi-bold">
        Tú eliges cuanto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online
      </Text>
    </div>
  );
};
