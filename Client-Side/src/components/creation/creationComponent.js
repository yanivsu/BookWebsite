import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(3),
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
}));

function Creation() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "3%" }}
      className={classes.card}
    >
      <Grid
        xl={7}
        md={10}
        xs={12}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid md={3}>
          <Card className={classes.root} style={{ cursor: "pointer" }}>
            <CardHeader title="דף צביעה" />
            <CardMedia
              className={classes.media}
              image="https://lh3.google.com/u/0/d/1HL31rOcDYn7hTJeF2bgPHUDl8i4_1DxJUJR_-R6bDRA=w200-h190-p-k-nu-iv3"
              title="Paint"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button>הורדה</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid md={3}>
          <Card className={classes.root}>
            <CardHeader title="דף צביעה" />
            <CardMedia
              className={classes.media}
              image="https://lh3.google.com/u/0/d/1HL31rOcDYn7hTJeF2bgPHUDl8i4_1DxJUJR_-R6bDRA=w200-h190-p-k-nu-iv3"
              title="Paint"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button>הורדה</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid md={3}>
          <Card className={classes.root}>
            <CardHeader title="דף צביעה" />
            <CardMedia
              className={classes.media}
              image="https://lh3.google.com/u/0/d/1HL31rOcDYn7hTJeF2bgPHUDl8i4_1DxJUJR_-R6bDRA=w200-h190-p-k-nu-iv3"
              title="Paint"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button>הורדה</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Creation;
//https://docs.google.com/document/d/1HL31rOcDYn7hTJeF2bgPHUDl8i4_1DxJUJR_-R6bDRA/edit?usp=sharing
