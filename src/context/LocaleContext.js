// Core
import React, { createContext, useState } from 'react';

export const LocaleContext = createContext();

const LocaleContextProvider = ({ children, locale }) => {
    // eslint-disable-next-line
    const [ language, setLanguage ] = useState(locale);

    return (
        <LocaleContext.Provider value={{ language }}>
            {children}
        </LocaleContext.Provider>
    );
};

export default LocaleContextProvider;