import React, { useContext } from "react";
import { Context } from "../Context";

function Button() {
  const context = useContext(Context);

  return (
    <div>
      {context.status === 0 ? (
        <button
          className="stopwatch-btn stopwatch-btn-gre"
          onClick={context.start}
        >
          Start
        </button>
      ) : (
        ""
      )}

      {context.status === 1 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-red"
            onClick={context.pause}
          >
            Stop
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onDoubleClick={context.pause}
          >
            Wait
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-red"
            onClick={context.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {context.status === 2 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={context.resume}
          >
            Resume
          </button>
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={context.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Button;
