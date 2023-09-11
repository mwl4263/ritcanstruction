import React from "react";
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
  Grid,
} from "@mui/material";

import images from "../assets/index";

function Gallery() {
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
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item spacing={{ xs: 12 }}>
          <Typography>9</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Gallery;
