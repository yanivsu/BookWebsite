import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";

import SimpleDialog from "./creationDialogComponent";
import * as enums from "../../helpers/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(3),
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.10, 1.10, 1)" },
    textAlign: "center",
  },

  media: {
    width: "auto",
    maxHeight: "200px",
    marginRight: "auto",
    marginLeft: "auto",
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
}));

function Creation() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "3%" }}
    >
      <Grid
        xl={7}
        md={10}
        xs={12}
        container
        justifyContent="space-between"
        alignItems="center"
      >
        {enums.paintPapersLinks.map((paintPaperLink, index) => {
          return (
            <Grid md={3} className={classes.card}>
              <Card
                className={classes.root}
                style={{ cursor: "pointer" }}
                key={index}
                onClick={(e) => {
                  console.log(e);
                  setOpenDialog(true);
                  setData({
                    imgLink: paintPaperLink,
                  });
                }}
              >
                <CardHeader title="דף צביעה" />
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={paintPaperLink}
                  title="Paint"
                ></CardMedia>
                <CardActions disableSpacing>
                  <Grid container justifyContent="center"></Grid>
                </CardActions>
              </Card>
            </Grid>
          );
        })}

        <Grid md={12}>
          <SimpleDialog data={data} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Creation;
