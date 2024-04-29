import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/common';

export const MainLayout = (): ReactElement => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
