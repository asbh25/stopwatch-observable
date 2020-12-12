import React, { useContext } from "react";
import Button from "./Button";
import { Context } from "../Context";

function Buttons() {
  const context = useContext(Context);

  return (
    <div>
      {context.status === 0 && (
        <Button classname="gre" func={context.start} title={"Start"} />
      )}

      {context.status === 1 && (
        <div>
          <Button classname="red" func={context.pause} title={"Stop"} />
          <button
            className="stopwatch-btn stopwatch-btn-yel"
            onDoubleClick={context.pause}
          >
            Wait
          </button>
          <Button classname="red" func={context.reset} title={"Reset"} />
        </div>
      )}

      {context.status === 2 && (
        <div>
          <Button classname="gre" func={context.start} title={"Resume"} />
          <Button classname="red" func={context.reset} title={"Reset"} />
        </div>
      )}
    </div>
  );
}

export default Buttons;
