import React from "react";
import { Element } from "react-scroll";
import { Grid } from "@material-ui/core";

import About from "../about/aboutComponent";
import ArtInfo from "../art/artInfoComponent";
import AppHeader from "../header/headerComponent";
import * as enums from "../../helpers/enums";

import linoysProfilePicture from "../../styles/profilePicture.jpg";
import noasProfilePicture from "../../styles/NoaProfilePicture.jpg";

const linoysData = {
  name: enums.artInfoTexts.LINOY,
  about: enums.artInfoTexts.ABOUT_LINOY,
  profilePicture: linoysProfilePicture,
  backgroundPicture: "../../../styles/cloudsBackground2.svg",
  rightSide: true,
};

const noasData = {
  name: enums.artInfoTexts.NOA,
  about: enums.artInfoTexts.ABOUT_NOA,
  profilePicture: noasProfilePicture,
  backgroundPicture: "../../../styles/cloudsBackground2.svg",
  rightSide: false,
};

function MainPage() {
  const data = [linoysData, noasData];
  return (
    <Grid>
      <Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "3%" }}
        >
          <Grid xl={7} md={10} xs={12}>
            <About />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "3%" }}
        >
          <Grid xl={7} md={10} xs={12}>
            <Element name="ArtInfoElement">
              {data.map((person, index) => {
                return (
                  <div id={index}>
                    <ArtInfo data={person} />;
                  </div>
                );
              })}
            </Element>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainPage;
