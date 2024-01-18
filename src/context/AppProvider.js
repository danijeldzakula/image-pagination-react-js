import React, { createContext, useContext } from 'react';
// create context 
const AppContext = createContext(null);
// context provider
const AppProvider = ({ children }) => {
    // context value
    const contextValue = {}
    return (
        <AppContext.Provider value={contextValue}>
          <div className="app">
            {children}
          </div>
        </AppContext.Provider>
    );
};
// call custom hook
const useGlobalHook = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalHook };