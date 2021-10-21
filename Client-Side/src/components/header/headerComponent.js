import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

import headerIcon from "../../styles/headerIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  logo: {
    height: "100px",
    width: "150px",
  },
  button: {
    border: "3px solid white",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Button className={classes.button} color="secondary">
              כפתור 1
            </Button>
            <Button className={classes.button} color="secondary">
              כפתור 2
            </Button>
            <img className={classes.logo} src={headerIcon} alt="fireSpot" />
            <Button className={classes.button} color="secondary">
              כפתור 3
            </Button>
            <Button className={classes.button} color="secondary">
              כפתור 4
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
