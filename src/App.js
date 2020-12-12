import React, { useState } from "react";
import Button from "./Components/Button";
import Stopwatch from "./Components/Stopwatch";
import "./App.css";

function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [intervalId, setIntervalId] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setIntervalId(setInterval(run, 1000));
  };

  let updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    updatedS++;

    if (updatedS === 60) {
      updatedS = 0;
      updatedM++;
    }

    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(intervalId);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(intervalId);
    setStatus(0);
    setTime({ s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Stopwatch time={time} />
          <Button
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
