import React, { useState } from "react";
import Button from "./Components/Button";
import Stopwatch from "./Components/Stopwatch";

import { interval } from "rxjs";

import "./App.css";

function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [sub, setSub] = useState();
  const [status, setStatus] = useState(0);

  const source = interval(1000);

  const start = () => {
    setStatus(1);

    let updatedS = time.s,
      updatedM = time.m,
      updatedH = time.h;

    setSub(
      source.subscribe(() => {
        updatedS++;

        if (updatedS === 60) {
          updatedS = 0;
          updatedM++;
        }

        if (updatedM === 60) {
          updatedH++;
          updatedM = 0;
        }

        setTime({ s: updatedS, m: updatedM, h: updatedH });
      })
    );
  };

  const pause = () => {
    sub.unsubscribe();
    setStatus(2);
  };

  const reset = () => {
    sub.unsubscribe();
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
            start={start}
            pause={pause}
            resume={resume}
            reset={reset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
