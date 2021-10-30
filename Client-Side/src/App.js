import React from "react";

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

const linoysData = {
  name: enums.artInfoTexts.LINOY,
  about: enums.artInfoTexts.ABOUT_LINOY,
  profilePicture: linoysProfilePicture,
  backgroundPicture: "../../styles/cloudsBackground2.svg",
  rightSide: true,
};

const noasData = {
  name: enums.artInfoTexts.NOA,
  about: enums.artInfoTexts.ABOUT_NOA,
  profilePicture: noasProfilePicture,
  backgroundPicture: "../../styles/cloudsBackground2.svg",
  rightSide: false,
};

const data = [linoysData, noasData];

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid xl={7} md={10} xs={12}>
          <AppHeader />
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "3%" }}
      >
        <Grid xl={7} md={10} xs={12}>
          <About />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "3%" }}
      >
        <Grid xl={7} md={10} xs={12}>
          {data.map((person) => {
            return <ArtInfo data={person} />;
          })}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
