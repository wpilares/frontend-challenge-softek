import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = (): ReactElement => {
  return (
    <div>
      <div>NavBar</div>
      <Outlet />
    </div>
  );
};
