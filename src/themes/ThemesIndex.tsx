import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import React from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

import { useCustomSelector } from '../hooks/redux/HooksIndex';

interface Props {
  children: React.ReactNode;
}

const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  const { themeMode } = useCustomSelector((state) => state.settings);
  const isLight = themeMode === 'light';
  const theme = createTheme({
    palette: {
      primary: {
        main: '#651fff'
      },
      mode: isLight ? 'light' : 'dark'
    }
  });
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;
