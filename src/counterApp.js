import { React, useState } from "react";

export function CounterApp() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div>
        <h1>Current Count : {count}</h1>
      </div>
      <div>
        <button onClick={Increase}>Increase</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrease}>Decrease</button>
      </div>
    </div>
  );
}
