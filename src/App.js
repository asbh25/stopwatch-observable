import React from "react";
import Button from "./Components/Button";
import Stopwatch from "./Components/Stopwatch";

import "./App.css";

function App() {
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Stopwatch />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
