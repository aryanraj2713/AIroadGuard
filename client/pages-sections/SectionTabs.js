import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import CustomizedTables from "../components/Table/TableContainer";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomTabs from "/components/CustomTabs/CustomTabs.js";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";
import MediaCard from "./new";
import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h1 className={classes.title}>Camera 01 Output</h1>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Accident - Realtime Output Display</small>
              </h3>
              <div>
                <CustomTabs plainTabs headerColor="danger" />
              </div>
              <MediaCard />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Information - Incoming Data About Accident</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="primary"
                // tabs={[
                //   {
                //     tabName: "Incoming Data About Accident",
                //     tabContent: (
                //       <p className={classes.textCenter}>
                //         I think that’s a responsibility that I have, to push
                //         possibilities, to show people, this is the level that
                //         things could be at. So when you get something that has
                //         the name Kanye West on it, it’s supposed to be pushing
                //         the furthest possibilities. I will be the leader of a
                //         company that ends up being worth billions of dollars,
                //         because I got the answers. I understand culture. I am
                //         the nucleus.
                //       </p>
                //     ),
                //   },
                // ]}
              />
              {/* <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div> */}
              <Paper style={{ maxHeight: 300, overflow: "auto" }}>
                <List>
                  <CustomizedTables />
                </List>
              </Paper>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
