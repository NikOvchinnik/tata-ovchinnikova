import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MasterPage = lazy(() => import('./pages/MasterPage/MasterPage'));
const SalePage = lazy(() => import('./pages/SalePage/SalePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/masterclass" element={<MasterPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
