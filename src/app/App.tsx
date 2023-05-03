import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './layout/Layout';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import FormPage from '../pages/formPage/FormPage';
import NotFound from '../pages/notFound/NotFound';

import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
      </Route>
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default App;
