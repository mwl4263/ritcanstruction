import logo from "./logo.svg";
import "./App.css";
import WelcomeHeader from "./components/WelcomeHeader";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import WhatIsIt from "./components/WhatIsIt";
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
        {!animationDone ? (
          <WelcomeHeader
            setAnimationDone={setAnimationDone}
            animationDone={animationDone}
          ></WelcomeHeader>
        ) : null}
        {animationDone ? <WhatIsIt /> : null}
      </header>
    </div>
  );
}

export default App;
