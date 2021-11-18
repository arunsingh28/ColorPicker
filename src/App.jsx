import React from "react";
import Color from "./config/color";

const App = () => {
  const pick = React.useRef();
  const [color, setColor] = React.useState();
  return (
    <div>
      <input type="color" ref={pick} />
      <button
        onClick={() => {
          const c = Color(pick.current.value);
          setColor(c);
        }}
      >
        Get
      </button>
      {color ? color : "please select color"}

      <input type="color" value={color} />
    </div>
  );
};

export default App;
