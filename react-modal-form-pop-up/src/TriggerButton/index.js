import React from "react";
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <div>
    <button
      className="button"
      ref={buttonRef}
      onClick={showModal}
    >
      Log In
    </button>

<button
className="button2"
ref={buttonRef}
onClick={showModal}
>
Sign Up
</button>
</div>
  );
};
export default Trigger;
