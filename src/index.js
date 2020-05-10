import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import es from 'translations/es.json';
import en from 'translations/en.json';
import * as serviceWorker from './serviceWorker';
import 'style/index.css';

const messages = {
  es,
  en,
}

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider
      locale="es"
      messages={messages.es}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
