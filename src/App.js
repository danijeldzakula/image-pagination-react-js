import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppProvider';
import Routes from './routes/Router';


const App = () => {
  const location = useLocation();
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'      
    });
    return () => {};
  }, [ location, pathname ]);

  useLayoutEffect(() => {
    if (window.history.action === 'POP') {
      window.addEventListener('unload', (e) => {
        return window.scrollTo(0, 0);
      });
    }
  
    if (window.history.scrollRestoration) {
      if (window.history.scrollRestoration === 'auto') {
        window.history.scrollRestoration = 'manual';
      }
      window.addEventListener('unload', () => {
        return window.scrollTo(0, 0);
      });
    }

    return () => {};
  }, [ location ]);

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}

export default App;