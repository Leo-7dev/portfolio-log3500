import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { FournisseurApplication } from './context/ContexteApplication.jsx';

import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/composants.css';

// Point d'entree du client React.
// BrowserRouter englobe l'application afin que React Router v6 controle l'URL,
// et FournisseurApplication diffuse l'etat global (theme et langue).
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FournisseurApplication>
        <App />
      </FournisseurApplication>
    </BrowserRouter>
  </React.StrictMode>
);
