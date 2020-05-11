import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import RouterControl from 'components/RouterControl';
import Header from 'components/Header';
import es from 'translations/es.json';
import en from 'translations/en.json';

const messages = {
  es,
  en,
};

function App() {
  const [language, setLanguage] = useState('es');
  function handleLanguage() {
    setLanguage(language === 'es' ? 'en' : 'es');
  }

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="container">
        <Header language={language} onChangeLanguage={handleLanguage} />
        <RouterControl />
      </div>
    </IntlProvider>
  );
}

export default App;
