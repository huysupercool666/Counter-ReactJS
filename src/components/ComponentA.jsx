import React, { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  const [count, setCount] = useState(0);

  function triggerButtonCounterComponentA() {
    setCount(count + 1);
  }

  function triggerButtonReset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <hr />
      <h1 className="Component-A__title">COMPONENT A</h1>
      <button
        className="Component-A__button"
        onClick={triggerButtonCounterComponentA}
      >
        Button A
      </button>

      <hr />
      <ComponentB setCount={setCount} />
      <button className="Reset-Button" onClick={triggerButtonReset}>
        RESET
      </button>
    </div>
  );
}

export default ComponentA;
