import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import bookPicture from "../../styles/bookPicture.png";
import backGroundCard from "../../styles/backGroundCard.png";
import test1 from "../../styles/2.svg";
import backgroundSvgTest from "../../styles/backgroundSvgTest.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundImage: `url(${test1})`,
    backgroundSize: "cover",
    backgroundPosition: "1px",
    backgroundRepeat: "no-repeat",
  },

  test: {},

  details: {
    display: "flex",
    flexDirection: "column",
  },

  media: {
    margin: theme.spacing(2),
    width: "25%",
    height: "25%",
    backgroundSize: "cover",
  },
  button: {
    width: "30%",
    height: "80px",
  },
  box: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "2%",
    marginBottom: "2%",
    alignItems: "center",
  },
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={bookPicture}
        title="Book Picture"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h3">
            אז הגיע הלילה של כוכב השביט הראשון
          </Typography>
          <Typography variant="h5" color="textSecondary">
            פד גם הוא להאצ'ינס. "אני בהלם", כתב בטוויטר, "היה לי המזל לעבוד עם
            האלינה על סרט. היא הייתה אדם נפלא וכישרון ענק. אני לא מאמין שדבר כזה
            יכול לקרות בעידן הנוכחי... כדור מאקדח שהוא אביזר על הסט? איזו טרגדיה
            נוראה. ליבי יוצא למשפחתה". התסריטאית נל סקובל צייצה: "רק 5% מהצלמים
            הראשיים בהוליווד הן נשים, וזה מעיד על הכישרון וה
          </Typography>
        </CardContent>
        <Box className={classes.box} component="span">
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
          >
            <ShoppingCartOutlinedIcon fontSize="large" aria-label="Buy" />
            <Typography variant="h4">לרכישה</Typography>
          </Button>
        </Box>
      </div>
    </Card>
  );
}
