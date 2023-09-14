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
  Grid,
  Button,
} from "@mui/material";

import pastPhoto1 from "../assets/past1.jpeg";
import * as allImages2018 from "../assets/2018/index";
import * as allImages2019 from "../assets/2019/index";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { transform } from "react-jsx";
const imgOrder2019 = ["img14", "img13", "img12", "img11", "img10", "img9", "img8", "img7", "img6", "img5", "img4", "img3", "img2", "img1"];
const imgOrder2018 = ["img31", "img30", "img29", "img28", "img27", "img26", "img25", "img24", "img23", "img22", "img21", "img20", "img19", "img18", "img17", "img16", "img15", "img14", "img13", "img12", "img11", "img10", "img9", "img8", "img7", "img6", "img5", "img4", "img3", "img2", "img1"];
function WhatIsIt(isShowing) {
  const [mouseIn, setMouseIn] = useState(false);
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
      <Grid
        container
        spacing={{ xs: 2 }}
        columns={{ xs: 4, sm: 8 }}
        sx={{ justifyContent: "center", display: "flex" }}
      >
        <Grid item spacing={{ xs: 12 }} sx={{ width: "100%", mt: 10 }}>
          <Box sx={{ width: "100%", textAlign: "center", display: "block" }}>
            <Typography variant="h2" sx={{ width: "100%" }}>
              2019
            </Typography>
          </Box>
        </Grid>
        {Object.values(allImages2019).reverse().map((item, index) => {
          return (
            <Grid item  spacing={{ xs: 4 }} sx={{ m: 2}}>
              <img  className="gallery-image" src={item} height="300px"></img>
            </Grid>
          );
        })}
        <Grid item spacing={{ xs: 12 }} sx={{ width: "100%", mt: 10 }}>
          <Box sx={{ width: "100%", textAlign: "center", display: "block" }}>
            <Typography variant="h2" sx={{ width: "100%" }}>
              2018
            </Typography>
          </Box>
        </Grid>
        {Object.values(allImages2018).reverse().map((item, index) => {
          return (
            <Grid item  spacing={{ xs: 4 }} sx={{ m: 2}}>
              <img className="gallery-image" src={item} height="300px"></img>
            </Grid>
          );
        })}

      </Grid>
    </Box>
  );
}
export default WhatIsIt;
