import React from 'react';
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core';

const IndexStyles = ({ children }: { children: React.ReactNode }) => {
  const styles = createMuiTheme({});
  return (
    <MuiThemeProvider theme={styles}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default IndexStyles;
