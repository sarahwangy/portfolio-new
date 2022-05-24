import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

// Styles used by this component
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.contrastText,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    width: "100%",
    height: "100%",
  },
}));

// This component displays the text content in the about page
export default function AboutDetails(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography paragraph={true}>Hi, I'm Sarah!</Typography>
      <Typography paragraph={true}>
        I’m a front end developer specializing in building creative websites.
        Currently, I’m focused on building responsive applications. My skills
        are in React, Node.js, Express, MySQL, MongoDB, JavaScript, Material UI,
        Bootstrap, C#, Python, R, CSS and SCSS.
      </Typography>
      <Typography paragraph={true}>
        <strong className="about-me-panel-header">Education - </strong>I
        graduated with the major of Master of Business Analytics specializing in
        Information System, and I am a self-taught web developer. I found my
        passion is related with building creative websites and apps, so I would
        like to shift my career to software engineering. I accepted
        <a
          style={{ textDecoration: "none" }}
          href="https://twitter.com/search?q=%23100daysofcodechallenge&src=typeahead_click"
        >
          <b>100DaysOfCodeChallenge</b>
        </a>{" "}
        in{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://twitter.com/happySarahss"
        >
          <b>Twitter</b>
        </a>{" "}
        where I shared and updated what I learned to become an awesome software
        developer every day. I used Twitter for updates, networking, and talking
        to my coding friends.
      </Typography>
      <Typography paragraph={true}>
        <strong className="about-me-panel-header text-center">
          Experience
        </strong>{" "}
        I cherish and appreciate my previous working and learning experience, as
        it taught me about how to collaborative to work with teams.
      </Typography>
      <Typography paragraph={true}>Thanks for reading ❤️</Typography>
    </Box>
  );
}
