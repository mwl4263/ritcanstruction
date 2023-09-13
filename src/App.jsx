import logo from "./logo.svg";
import "./App.css";
import WelcomeHeader from "./components/WelcomeHeader";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import WhatIsIt from "./components/WhatIsIt";
import { Divider, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
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
          <Divider sx={{mt: 5}}></Divider>
          <ArrowDownwardIcon fontSize="large"></ArrowDownwardIcon>
          <Divider sx={{mt: 30}}></Divider>
          <Typography sx={{textDecoration: "underline"}} variant="h2">Past Years</Typography>
        <WhatIsIt></WhatIsIt>
      </header>
    </div>
  );
}

export default App;
