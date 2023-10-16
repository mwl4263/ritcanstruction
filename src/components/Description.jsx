import { Box, Typography } from "@mui/material";
import React from "react";

function Description() {
  return (
    <Box sx={{ width: "70%", ml: 10, mr: 10, textAlign: "left" }}>
      <Typography variant="p">
        Canstruction® is a global charitable contest in which architects,
        engineers, contractors, and students vie to create massive structures
        using only full cans of food. Rochester is one of 100 cities in North
        America participating in Canstruction® Competitions in the upcoming
        year. These remarkable structures, constructed by leading architectural
        and engineering companies, showcase both creativity and compassion. They
        make a positive impact by boosting the morale of those in need, raising
        public awareness, and most importantly, collecting millions of pounds of
        food for local food banks.
      </Typography>
    </Box>
  );
}

export default Description;
