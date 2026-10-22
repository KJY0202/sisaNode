import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <span
        style={{ color: count < 0 ? "red" : count >= 10 ? "blue" : "black" }}
      >
        {count}
      </span>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Counter;
