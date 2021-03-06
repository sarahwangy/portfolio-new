import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import utilities from "../utils/utilities";

// Styles used by this component
const useStyles = makeStyles((theme) => ({
  details: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    width: "100%",
    height: "100%",
  },
}));

// This component displays the image in the about page
export default function AboutImage(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      xs={12}
      className={classes.details}
      align="center"
      justify="center"
      direction="column"
    >
      <Box>
        <img
         
          src={`${utilities.imageFolder}me.jpeg`}
          className="portfolio-image"
          alt="Sarah"
        />
      </Box>
    </Grid>
  );
}
