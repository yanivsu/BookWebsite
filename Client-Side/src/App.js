import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AppHeader from "./components/header/headerComponent";
import About from "./components/about/aboutComponent";
import ArtInfo from "./components/art/artInfoComponent";
import Art2Info from "./components/art/artInfo2Componenet";
import * as enums from "./helpers/enums";

import linoysProfilePicture from "./styles/profilePicture.jpg";
import noasProfilePicture from "./styles/NoaProfilePicture.jpg";
import MainPage from "./components/MainPage/mainPageComponent";
import Creation from "./components/creation/creationComponent";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container justifyContent="center" alignItems="center">
          <Grid xl={7} md={10} xs={12}>
            <AppHeader />
          </Grid>
        </Grid>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Creation" element={<Creation />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
