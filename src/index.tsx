import { MainPage } from '@/pages/MainPage.tsx'; // https://nodejs.org/api/esm.html#mandatory-file-extensions

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const rootElement = document.getElementById('react-root') as HTMLElement;
const app = createRoot(rootElement);
app.render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
