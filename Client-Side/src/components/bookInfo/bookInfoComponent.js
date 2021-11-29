import React from "react";

import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as enums from "../../helpers/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundPosition: "1px",
    backgroundRepeat: "no-repeat",
    // backgroundImage: `url(${cloudsBackground})`,
    opacity: "1",
    minWidth: "100%",
    minHeight: "100%",
  },
  img: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: theme.spacing(2),
  },
  paper: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
}));

function BookInfo() {
  const classes = useStyles();

  const bookPictures = enums.bookPictursLinks;
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
    },
  ];

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "3%" }}
    >
      <Grid xl={7} md={10} xs={12}>
        <Carousel animation="slide" className={classes.root}>
          {items.map((item, i) => (
            <Grid container justifyContent="center">
              <Grid>
                <img
                  src={bookPictures[i]}
                  alt="pictre"
                  className={classes.img}
                />
              </Grid>
            </Grid>
          ))}
        </Carousel>
        <Paper className={classes.paper}>
          <Typography
            variant="h5"
            component="p"
            align="center"
            style={{
              whiteSpace: "pre-line",
            }}
            className={classes.text}
          >
            {enums.bookInfoParag}
          </Typography>
        </Paper>
        <Grid container justifyContent="center">
          <img src={bookPictures[2]} alt="pictre" className={classes.img} />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default BookInfo;
