import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AppHeader from "./components/header/headerComponent";
import About from "./components/about/aboutComponent";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A9D8F",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Secular One", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid sm={9} xs={12}>
          <AppHeader />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "3%" }}
      >
        <Grid sm={9}>
          <About />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
