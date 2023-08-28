import React from "react";
import { useState, useEffect } from "react";
import {
  AppBar,
  Fade,
  Slide,
  Toolbar,
  Typography,
  Box,
  Zoom,
  Paper,
  Grow,
  Button,
} from "@mui/material";
import pastPhoto1 from "../assets/past1.jpeg";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { transform } from "react-jsx";
function WhatIsIt(isShowing) {
  const [visibility, setVisibility] = useState("70% !important");
  const [growSize, setGrowSize] = useState("2vw");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      <Fade in={true} timeout={2000}>
        <Box
          sx={{
            zIndex: 0,
            width: "60%",
            flexDirection: "column",
            height: "auto",
            p: 2,
            mt: 10,
            mr: 5,
            ml: 5,
            display: "flex",
            textAlign: "left",
          }}
        >
          <img src={pastPhoto1}></img>
        </Box>
      </Fade>
      <Grow in={true} timeout={2000}>
        <Box
          onMouseLeave={() => {
            setVisibility("70% !important");
          }}
          onMouseEnter={() => {
            setVisibility("100% !important");
          }}
          sx={{
            zIndex: 1,
            timeout: 500,
            opacity: visibility,
            width: "50%",
            flexDirection: "column",
            height: "200px",
            right: 0,
            p: 2,
            mt: 10,
            position: "absolute",
            display: "flex",
            backgroundColor: "#F76902",
            textAlign: "left",
          }}
        >
          <Typography variant="h4">What is Canstruction?</Typography>
          <Typography sx={{ fontStyle: "italic" }} variant="p">
            "An exhibition of structures made from unopened cans of food that
            are later donated"{" "}
          </Typography>
          <Typography variant="p" sx={{textAlign: "right", mr: 7}}>-New York Times</Typography>
        </Box>
      </Grow>
      <Slide in={true} direction={"left"} timeout={2000}>
        <Box
          onMouseEnter={() => {
            setGrowSize("3vw");
          }}
          onMouseLeave={() => {
            setGrowSize("2vw");
          }}
          sx={{pt: 3, pb: 3, flexWrap: "nowrap", display: "flex",alignItems:"end", height:"auto", right: 0, ml: 5, mb: "10vh" }}
        >
          <Button

            sx={{
              "@keyframes moveBackAndForth": {
                "0%": {
                  transform: "translateX(-10px)",
                },
                "50%": {
                  transform: "translateX(+10px)",
                },
                "100%": { transform: "translateX(-10px)" },
              },
              display: "flex",
              flexDirection: "column",
              color: "white",
              height: "10vw",

              borderRadius: "25px",

            }}
          >
            <Box sx={{ animation: "moveBackAndForth 3s ease-in infinite "}}>
            <Typography
              sx={{
                transitionDuration: "1s",
                display: "flex",
                whiteSpace: "nowrap",
                fontSize: "2vw",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              variant="h2"
            >
              Show me
            </Typography>
            <Typography
              sx={{

                transitionDuration: "1s",
                display: "flex",
                whiteSpace: "nowrap",
                fontSize:"2vw",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              Past Projects
              <ArrowForwardIcon fontSize="inherit"></ArrowForwardIcon>
            </Typography>
            </Box>
          </Button>
        </Box>
      </Slide>

    </Box>
  );
}
export default WhatIsIt;
