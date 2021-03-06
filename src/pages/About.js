import React from "react";
import { Typography, Slide, Card, Container } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import AboutDetails from "../components/AboutDetails";
import AboutImage from "../components/AboutImage";

// This page displays profile information
export default function About(props) {
  return (
    <Container maxWidth="md" component="div" className="slide-container">
      <Slide
        direction="right"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 1200, exit: 0 }}
      >
        <Box align="center">
          <Typography variant="h5">About Me</Typography>
        </Box>
      </Slide>

      <Slide
        direction="up"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 1000, exit: 0 }}
      >
        <Card elevation={3}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <AboutImage />
            </Grid>
            <Grid item xs={12} sm={8}>
              <AboutDetails />
            </Grid>
          </Grid>
        </Card>
      </Slide>
    </Container>
  );
}
