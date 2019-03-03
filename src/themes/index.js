import React from 'react';

import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    inactiveColor: '#262626',
    border: '#cbe8d7',
  },
  linearGradient: {
    header: {
      from: '#4252D1',
      to: '#609BDB',
    },
  },
  tabColors: {
    home: {
      active: 'rgba(244, 195, 0, 1)',
      background: 'rgba(244, 195, 0, 0.1)',
    },
    search: {
      active: 'rgba(64, 234, 135, 1)',
      background: 'rgba(64, 234, 135, 0.1)',
    },
    profile: {
      active: 'rgba(208, 115, 255, 1)',
      background: 'rgba(208, 115, 255, 0.1)',
    },
    settings: {
      active: 'rgba(235, 92, 110, 1)',
      background: 'rgba(235, 92, 110, 0.1)',
    },
  },
};

export default props => <ThemeProvider theme={theme} {...props} />;
