import React, { useContext } from "react";
import { Context } from "../Context";

function Stopwatch() {
  const watch = useContext(Context);
  const { time } = watch;

  return (
    <div>
      <span>{time.h >= 10 ? time.h : "0" + time.h}</span>
      &nbsp;:&nbsp;
      <span>{time.m >= 10 ? time.m : "0" + time.m}</span>
      &nbsp;:&nbsp;
      <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
    </div>
  );
}

export default Stopwatch;
