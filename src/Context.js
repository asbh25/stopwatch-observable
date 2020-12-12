import React, { useState } from "react";
import { interval } from "rxjs";

export const Context = React.createContext();

export function ContextProvider({ children }) {
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
    <Context.Provider
      value={{
        time,
        status,
        start,
        pause,
        reset,
        resume,
      }}
    >
      {children}
    </Context.Provider>
  );
}
