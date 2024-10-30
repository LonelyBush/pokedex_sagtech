import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import ProviderWrapper from './utils/provider-wrappers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  </StrictMode>,
);
