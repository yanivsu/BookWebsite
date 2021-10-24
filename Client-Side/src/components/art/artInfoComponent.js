import React from "react";

import { Card, Grid, Paper, Typography } from "@material-ui/core";

import profilePicture from "../../styles/profilePicture.jpg";

export default function ArtInfo(props) {
  return (
    <Paper elevation={3}>
      <Grid container justifyContent="center" alignItems="center">
        <Typography variant="h4"> Hello It's me </Typography>
      </Grid>
    </Paper>
  );
}
