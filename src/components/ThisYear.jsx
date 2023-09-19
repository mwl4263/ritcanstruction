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
  Card,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";

function ThisYear() {
  return (
    <Grid container rowSpacing={1} sx={{ flexDirection: { xs: "column", md: "row"} }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item  sx={{ m: "auto" }}  xs={8}>
       <Card sx={{ m: "auto", width: "70%", p: 4, borderRadius: "10px" }}>
          <Typography variant="h3">Who's Involved</Typography>
          <List
            sx={{
              justifyContent: "center",
              display: "block",
              textAlign: "center",
            }}
          >
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Dean Ganskop</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Juan Noguera</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Jake Adams</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Onvida Serixay</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Amulya "Amy" Saxena</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Maya Bochnik</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Kim Desantis</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Sean Bowler</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Gael Islas</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Gabe Scavo</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Mason Lapine</ListItemText>
            </ListItem>
           <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Tanisa Samaddar</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Neeraj Sugumaran Menon</ListItemText>
            </ListItem>

          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ThisYear;
