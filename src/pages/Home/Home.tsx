import { type ReactElement } from 'react';
import { Form, Header } from '@components/home';
import family from '@assets/home/family.png';
import './home.scss';
import backgroundPurple from '@assets/home/blur-asset-purple.svg';
import backgroundBlue from '@assets/home/blur-asset-blue.svg';

export const Home = (): ReactElement => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={family} alt="family" className="home__image" />
        <div className="home__content">
          <Header />
          <Form />
        </div>
      </div>
      <img
        className="home__background-purple"
        src={backgroundPurple}
        alt="backgroundpurple"
      />
      <img
        className="home__background-blue"
        src={backgroundBlue}
        alt="backgroundBlue"
      />
    </div>
  );
};
