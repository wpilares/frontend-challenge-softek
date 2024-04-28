import { type ReactElement } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '@pages/HomePage';
import { MainLayout } from '@components/Layouts';

const AppRouter = (): ReactElement => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
