import React, { useState } from "react";

export const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="container">
      <h1>{num}</h1>

      <div className="btn-container">
        <button
          onClick={function () {
            setNum(num + 1);
          }}
        >
          Increase
        </button>

        <button
          onClick={function () {
            setNum(num - 1);
          }}
        >
          Decrease
        </button>

        <button
          onClick={function () {
            setNum(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
