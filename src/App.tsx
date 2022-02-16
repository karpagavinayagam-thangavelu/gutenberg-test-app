import './App.css';
import React from 'react';
import { AppRoutes } from './AppRoutes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
