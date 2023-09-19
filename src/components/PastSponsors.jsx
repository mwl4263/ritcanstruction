import React from "react";
import { useState, useEffect } from "react";
import {Card, List, Typography, ListItem, ListItemText} from "@mui/material";
function PastSponsors(){
    return (
 <Card sx={{ m: "auto", width: "70%", p: 4, borderRadius: "10px" }}>
          <Typography variant="h3">Sponsors</Typography>
          <List
            sx={{
              justifyContent: "center",
              display: "block",
              textAlign: "center",
            }}
          >
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Christa Construction</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>The Pike Company</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Garlock Sealing Technologies</ListItemText>
            </ListItem>

            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>College of Art & Design</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>College of Engineering Technology</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Kate Gleason College of Engineering</ListItemText>
            </ListItem>
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText>Golisano College of Computing and Information Sciences</ListItemText>
            </ListItem>
          </List>
        </Card>);

}
export default PastSponsors;