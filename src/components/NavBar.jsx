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
} from "@mui/material";
import RITLogo from "../assets/RIT_rgb_hor_w.png";

function NavBar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black", mt: 0 }}>
      <Toolbar disableGutters>
        <img
          alt="RIT Logo"
          style={{ marginLeft: "20px" }}
          width="300px"
          src={RITLogo}
        ></img>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
