import React from 'react';

import AppNavigator from './navigation';
import ThemeProvider from './themes';

const App = () => (
  <ThemeProvider>
    <AppNavigator />
  </ThemeProvider>
);

export default App;
