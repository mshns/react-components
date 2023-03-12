import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../widgets/header/Header';
import Footer from '../widgets/footer/Footer';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NotFound from '../pages/notFound/NotFound';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
