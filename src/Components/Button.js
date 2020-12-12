import React from "react";

function Button(props) {
  return (
    <button
      className={`stopwatch-btn stopwatch-btn-${props.classname}`}
      onClick={props.func}
    >
      {props.title}
    </button>
  );
}

export default Button;
