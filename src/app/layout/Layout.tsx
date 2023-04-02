import { Outlet } from 'react-router-dom';

import Footer from '../../widgets/footer/Footer';
import Header from '../../widgets/header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
