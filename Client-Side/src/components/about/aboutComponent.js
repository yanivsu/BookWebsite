import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Fade from "@material-ui/core/Fade";

import frontBookImg from "../../styles/frontBookImg.jpg";
import cloudsBackground from "../../styles/cloudsBackground.svg";
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

export default function About() {
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
              image={frontBookImg}
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
                <Typography variant="h3" style={{ textAlign: "center" }}>
                  {enums.aboutComponentsTexts.TITLE}
                </Typography>

                <Typography
                  color="textSecondary"
                  paragraph
                  variant="h5"
                  style={{ whiteSpace: "pre-line", textAlign: "center" }}
                >
                  <br />
                  {enums.aboutComponentsTexts.PARAGRAPH}
                </Typography>
              </CardContent>
            </Grid>
            <Grid container justifyContent="center" alignItems="flex-end">
              <Box>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  title={enums.buttonsText.BUY}
                >
                  <ShoppingCartOutlinedIcon
                    titleAccess={enums.buttonsText.BUY}
                  />
                  <Typography variant="h4" titleAccess={enums.buttonsText.BUY}>
                    {enums.buttonsText.BUY}
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Fade>
  );
}
