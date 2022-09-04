import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import { Container } from "@material-ui/core";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { CardMedia } from "@material-ui/core";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function VideoSection() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Video Demonstartion of the Model</h2>
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <Container maxWidth="lg">
          <CardMedia component="iframe" height={600} image="" />
        </Container>
      </div>
      <div className={classes.section}>
        <GridContainer justify="center"></GridContainer>
      </div>
      <GridItem xs={12} sm={12} md={8}>
        <h1 className={classes.title}></h1>
      </GridItem>
    </div>
  );
}

{
  /* <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div> */
}
