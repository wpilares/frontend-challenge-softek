import { type ReactElement } from 'react';
import './footer.scss';
import logoFooter from '@assets/footer/company-logo-white.svg';
import { Text } from '@components/common/Text/Text.tsx';

export const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <img className="footer__image" src={logoFooter} alt="company-logo" />
      <Text className="footer__copyright" color="white" weight="regular">
        &copy; 2024 Todos los derechos reservados
      </Text>
    </footer>
  );
};
