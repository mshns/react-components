import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../widgets/footer/Footer';
import Header from '../../widgets/header/Header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
