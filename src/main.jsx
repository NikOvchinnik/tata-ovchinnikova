import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'modern-normalize';
// import { Provider } from 'react-redux';
// import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import { PersistGate } from 'redux-persist/integration/react';
// import Loader from './components/Loader/Loader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}> */}
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      {/* </PersistGate>
    </Provider> */}
  </StrictMode>
);
