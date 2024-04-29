import { type ReactElement } from 'react';
import './navbar.scss';
import companyLogo from '@assets/navbar/company-logo.svg';
import phoneIcon from '@assets/navbar/phone.svg';

export const Navbar = (): ReactElement => {
  return (
    <nav className="navbar">
      <img src={companyLogo} alt="company-logo" className="navbar__logo" />
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <div className="navbar__list-item__buy">¡Compra por este medio!</div>
        </li>
        <li className="navbar__list-item">
          <img
            src={phoneIcon}
            alt="phone-icon"
            className="navbar__list-item__icon"
          />
          <div className="navbar__list-item__phone">(01) 411 6001</div>
        </li>
      </ul>
    </nav>
  );
};
