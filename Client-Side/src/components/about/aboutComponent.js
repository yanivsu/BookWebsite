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
import cloudsBackground from "../../styles/f.png";
//import cloudsBackground from "../../styles/cloudsBackground.svg";
import * as enums from "../../helpers/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${cloudsBackground}) `,

    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",

    // backgroundAttachment: "fixed",
  },

  media: {
    margin: theme.spacing(2, 8, 2, 3),
    width: "73%",
    height: "75%",
  },

  button: {
    width: "100%",
    height: "80px",
    marginBottom: theme.spacing(8),
  },

  divider: {
    margin: theme.spacing(5, 0, 5),
    width: "5px",
    backgroundColor: "#ac1917",
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
          {/* <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          /> */}
          <Grid
            container
            sm={6}
            direction="row"
            style={{ marginLeft: "6%", marginTop: "2%" }}
          >
            <Grid item>
              <CardContent>
                <Typography
                  variant="h3"
                  style={{ textAlign: "center", color: "#001222" }}
                >
                  {enums.aboutComponentsTexts.TITLE}
                </Typography>

                <Typography
                  // color="textSecondary"
                  paragraph
                  variant="h5"
                  style={{
                    whiteSpace: "pre-line",
                    textAlign: "center",
                    color: "#001222",
                  }}
                >
                  {enums.aboutComponentsTexts.PARAGRAPH}
                </Typography>
              </CardContent>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
              <Box>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  title={enums.buttonsText.BUY}
                  onClick={() => {
                    window.open(enums.buttonsText.BUY_LINK, "_blank"); //to open new page
                  }}
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
