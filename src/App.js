import React from "react";
import Buttons from "./Components/Buttons";
import Stopwatch from "./Components/Stopwatch";

import "./App.css";

function App() {
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Stopwatch />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
