// Core
import React, { createContext, useState } from 'react';

export const LocaleContext = createContext();

const LocaleContextProvider = ({ children, locale }) => {
    const [ language, setLanguage ] = useState(locale);
    
    console.log('provider');
    console.log(language);

    return (
        <LocaleContext.Provider value={{ language }}>
            {children}
        </LocaleContext.Provider>
    );
};

export default LocaleContextProvider;