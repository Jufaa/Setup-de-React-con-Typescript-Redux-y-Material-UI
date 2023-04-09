import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './redux/store';
import Home from './pages/Home/Home';
import MuiThemeProvider from './themes/ThemesIndex';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MuiThemeProvider>
          <Home />
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
