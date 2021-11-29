import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll, Element } from "react-scroll";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import headerIcon from "../../styles/headerIcon.png";
import * as enums from "../../helpers/enums";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "100px",
    width: "150px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  toolBar: {
    margin: "auto",
  },
  button: {
    border: "3px solid black",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  buttonIcon: {
    margin: theme.spacing(0, 1, 0, 2),
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
  icon: {
    // position: "relative",
  },
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container md={12}>
          <Grid container justifyContent="center" className={classes.toolBar}>
            <Toolbar>
              <Link to="/Creation" style={{ textDecoration: "none" }}>
                <Button className={classes.button}>
                  {enums.buttonsText.CREATION}
                </Button>
              </Link>

              <Button className={classes.button} disabled>
                {enums.buttonsText.GALLARY}
              </Button>

              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  className={classes.logo}
                  src={headerIcon}
                  alt="למסך הבית"
                />
              </Link>

              <Link to="/BookInfo" style={{ textDecoration: "none" }}>
                <Button className={classes.button}>
                  {enums.buttonsText.ABOUT}
                </Button>
              </Link>
              <Link to="#" style={{ textDecoration: "none" }}>
                <Button
                  onClick={() => {
                    window.open(enums.buttonsText.BUY_LINK, "_blank"); //to open new page
                  }}
                  className={classes.button}
                >
                  {enums.buttonsText.BUY}
                </Button>
              </Link>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "1%" }}
      >
        <a
          href={enums.contants.facebook}
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{ color: "black" }}
        >
          <FacebookIcon
            className={classes.buttonIcon}
            style={{ textDecoration: "none" }}
          />
        </a>
        <a
          href={enums.contants.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{ color: "black" }}
        >
          <WhatsAppIcon className={classes.buttonIcon} />
        </a>
        <a
          href={enums.contants.email}
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{ color: "black" }}
        >
          <EmailIcon className={classes.buttonIcon} />
        </a>
      </Grid>
    </div>
  );
}
