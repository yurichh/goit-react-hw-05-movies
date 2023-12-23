import { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<span className="loader"></span>}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
