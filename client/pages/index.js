import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import ProductSection from "../pages-sections/ProductSection";
import SectionTabs from "../pages-sections/SectionTabs";
import VideoSections from "../pages-sections/Video";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="/img/bg77.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>AI roadGuard</h1>
                <h3 className={classes.subtitle}>Let our AI handle it.</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <ProductSection />
        <SectionTabs />
        <VideoSections />
      </div>
      <Footer />
    </div>
  );
}
