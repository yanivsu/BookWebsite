import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Fade from "@material-ui/core/Fade";

import profilePicture from "../../styles/profilePicture.jpg";
import cloudsBackground from "../../styles/cloudsBackground2.svg";
import * as enums from "../../helpers/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${cloudsBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "1px",
    backgroundRepeat: "no-repeat",
  },

  media: {
    margin: theme.spacing(2),
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  },

  button: {
    width: "100%",
    height: "80px",
    marginTop: theme.spacing(8),
  },

  divider: {
    margin: theme.spacing(5, 0, 5),
    width: "5px",
    backgroundColor: "primary",
  },
}));

export default function ArtInfo() {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={1500}>
      <Card className={classes.root}>
        <Grid
          container
          direction="row"
          sm={12}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={5}>
            <CardMedia
              component="img"
              className={classes.media}
              image={profilePicture}
              title={enums.buttonsText.BOOKPAGE}
            />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Grid container sm={6} direction="row">
            <Grid item>
              <CardContent>
                <Typography variant="h3">
                  <Box letterSpacing={5}>{enums.artInfoTexts.LINOY}</Box>
                </Typography>
                <Typography variant="h5" color="textSecondary">
                  {enums.artInfoTexts.ABOUT_LINOY}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Fade>
  );
}
