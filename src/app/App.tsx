import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import FormPage from '../pages/formPage/FormPage';
import NotFound from '../pages/notFound/NotFound';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
