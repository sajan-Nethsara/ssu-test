import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    {
      title:null,
      desc:null
    }
  );
  
  const updateLanguage = (newData) => {
    setLanguage(newData);
  };

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageContextProvider };