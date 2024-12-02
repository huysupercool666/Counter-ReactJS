import React from "react";

function ComponentB({ setCount }) {
  function triggerButtonCounterComponentB() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h1 className="Component-B__title"> COMPONENT B </h1>
      <button
        className="Component-B__button"
        onClick={triggerButtonCounterComponentB}
      >
        Button B
      </button>
    </div>
  );
}

export default ComponentB;
