import React from 'react';
import ReactDOM from 'react-dom';
import MoviesApp from './MoviesApp.jsx';
import './index.css';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "../src/translations/es/global.json";
import global_en from "../src/translations/en/global.json";
import { Provider } from 'react-redux';
import { store } from './store/store.js';

// Get the initial language of the LocalStorage or set a default one
const initialLanguage = localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('settings')).language : 'es';

// Initialize i18next with initial language
i18next.init({
  interpolation: { escapeValue: false },
  lng: initialLanguage,
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <MoviesApp  />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
