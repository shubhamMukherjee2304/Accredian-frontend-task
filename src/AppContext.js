import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    basename: '/app',
  });

  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  );
};