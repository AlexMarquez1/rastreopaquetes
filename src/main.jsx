import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Mapa } from './components/Mapa/Mapa';
import { RastreoApp } from './RastreoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RastreoApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
