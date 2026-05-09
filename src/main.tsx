import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";

import "@fontsource/roboto/400.css";

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './styles/main.scss';

import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <App />
    </>
  </StrictMode>
);