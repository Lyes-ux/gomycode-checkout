import { useState } from "react";

export default function HideTitle() {
  const [show, setShow] = useState("");

  return (
    <>
      <div className="phrase"></div>

      <div className="btn">
        <button onClick={() => setShow((show) => !show)}>Show / Hide</button>
      </div>
      {show ? <p>Welcome to react challenges</p> : null}
    </>
  );
}
