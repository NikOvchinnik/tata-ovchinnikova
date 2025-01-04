import { Suspense } from 'react';
import AppBar from './AppBar/AppBar';
import Loader from './Loader/Loader';
import Footer from './Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Footer />
    </div>
  );
};
