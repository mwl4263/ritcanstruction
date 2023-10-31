import logo from "./logo.svg";
import "./App.css";
import WelcomeHeader from "./components/WelcomeHeader";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import WhatIsIt from "./components/WhatIsIt";
import { Button, Divider, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ThisYear from "./components/ThisYear";
import Description from "./components/Description";
function App() {
  const [animationDone, setAnimationDone] = useState(false);
  const [siteLoaded, setSiteLoaded] = useState(false);
  useEffect(() => {
    if (animationDone === true) {
      console.log("activate site load");
    }
  }, [animationDone]);
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Divider light></Divider>
        <WelcomeHeader
          setAnimationDone={setAnimationDone}
          animationDone={animationDone}
        ></WelcomeHeader>
        <Divider sx={{ mt: 5 }}></Divider>
        <ArrowDownwardIcon fontSize="large"></ArrowDownwardIcon>
        <Divider sx={{ mt: 10 }}></Divider>
        <Button sx={{backgroundColor: "#F76902", color: "white", fontSize:"30px", p:2}}  href="https://impact.rit.edu/project/39700?clid=5nYnS5LGm904CnOo4c494o&utm_campaign=site_share&utm_medium=plain&utm_source=scalefunder">Donate to Our Crowdfunding Page</Button>
        <Divider sx={{ mt: 20 }}></Divider>
        <Typography variant="h2">What is it?</Typography>
        <Divider sx={{ mt: 5 }}></Divider>

        <Description />
        <Divider sx={{ mt: 5 }}></Divider>
        <Typography variant="h2">This Year</Typography>
        <Divider sx={{ mt: 5 }}></Divider>
        <ThisYear></ThisYear>
        <Divider sx={{ mt: 10 }}></Divider>

        <WhatIsIt></WhatIsIt>
      </header>
    </div>
  );
}

export default App;
