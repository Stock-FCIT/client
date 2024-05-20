import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ReactGA from 'react-ga4';

export const Context = createContext(null);

ReactGA.initialize('G-XEKTH13474', {
  debug: true,
  titleCase: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
      }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
);
