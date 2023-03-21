import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Form from '../pages/form/Form';
import NotFound from '../pages/notFound/NotFound';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
