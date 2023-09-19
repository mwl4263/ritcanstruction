import React from "react";
import { useState, useEffect } from "react";
import { Fade, Slide, Typography, Box, Zoom, Paper, Grow } from "@mui/material";

function WelcomeHeader({ animtationDone, setAnimationDone }) {
  const [showWelc, setShowWelc] = useState(animtationDone);
  const [showTo, setShowTo] = useState(false);
  const [showCan, setShowCan] = useState(false);
  const [openingAnimation, setOpeningAnimation] = useState(true);
  const [stamp, setStamp] = useState(false);
  const welcomeSlide = () => {
    setTimeout(() => {
      setShowWelc(true);
    }, 500);
    setTimeout(() => {
      setShowCan(true);
    }, 1500);

    setTimeout(() => {
      setShowTo(true);
    }, 1000);
    setTimeout(() => {
      setStamp(true);
    }, 2000);
    setTimeout(() => {
      setOpeningAnimation(false);
    }, 2000);
  };
  useEffect(() => {
    welcomeSlide();
  }, []);

  useEffect(() => {
    if (openingAnimation === false) {
      setTimeout(() => {
        setTimeout(() => {
          setAnimationDone(true);
        }, 2000);
      }, 2000);
    }
  }, [openingAnimation]);

  return (
    <Box sx={{ display: "flex", mt: 5 }}>
      <Box sx={{ flexDirection: "column", display: "inline-flex" }}>
        <Slide
          sx={{ margin: 3 }}
          timeout={showTo ? 1000 : 2000}
          in={showWelc}
          direction={"down"}
          mountOnEnter
        >
          <Typography variant="h2"> Welcome </Typography>
        </Slide>
        <Slide
          sx={{ margin: 3 }}
          timeout={showTo ? 1000 : 2000}
          in={showTo}
          direction={showTo ? "left" : "down"}
        >
          <Typography variant="h2"> To </Typography>
        </Slide>
        <Slide
          sx={{ margin: 3 }}
          in={showCan}
          timeout={showTo ? 1000 : 2000}
          direction={showCan ? "up" : "down"}
        >
          <Typography variant="h2"> Canstruction </Typography>
        </Slide>
        <Grow
          timeout={showTo ? 1000 : 3000}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          in={stamp}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "100px",
                fontWeight: "bold",
                color: "#F76902",

                mt: 10,

                //   display: openingAnimation ? "block" : "none",
              }}
            >
              RIT 2023
            </Typography>
          </Box>
        </Grow>
      </Box>

      {openingAnimation ? <></> : <></>}
    </Box>
  );
}
export default WelcomeHeader;
