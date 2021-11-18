import React from "react";
import Color from "./config/color";

const App = () => {
  const pick = React.useRef();
  return (
    <div>
      <input type="color" ref={pick} />
      <button
        onClick={() => {
          console.log(pick.current.value);
          Color(pick.current.value);
        }}
      >
        Get
      </button>
    </div>
  );
};

export default App;
