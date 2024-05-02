import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/common';
import { Footer } from '@components/home';

export const MainLayout = (): ReactElement => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
