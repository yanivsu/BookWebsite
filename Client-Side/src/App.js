import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import AppHeader from "./components/header/headerComponent";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A9D8F",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sm={9}>
          <AppHeader />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
