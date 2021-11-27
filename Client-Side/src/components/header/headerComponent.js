import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll, Element } from "react-scroll";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import headerIcon from "../../styles/headerIcon.png";
import * as enums from "../../helpers/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: "100px",
    width: "150px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  button: {
    border: "3px solid white",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    margin: "10px",
  },
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.web}
          >
            <Link to="/Creation" style={{ textDecoration: "none" }}>
              <Button className={classes.button} color="secondary">
                {enums.buttonsText.CREATION}
              </Button>
            </Link>

            <Button className={classes.button} color="secondary">
              {enums.buttonsText.GALLARY}
            </Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img className={classes.logo} src={headerIcon} alt="למסך הבית" />
            </Link>
            <Link to="/BookInfo" style={{ textDecoration: "none" }}>
              <Button className={classes.button} color="secondary">
                {enums.buttonsText.ABOUT}
              </Button>
            </Link>
            <Link to="#" style={{ textDecoration: "none" }}>
              <Button
                onClick={() => {
                  window.open(enums.buttonsText.BUY_LINK, "_blank"); //to open new page
                }}
                className={classes.button}
                color="secondary"
              >
                {enums.buttonsText.BUY}
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
