import { useState } from "react";

const App = () => {
  const [item, setItem] = useState({
    americanoPrice: 2000,
    americanoCount: 0,
    lattePrice: 2500,
    latteCount: 0,
    moccaPrice: 3000,
    moccaCount: 0,
  });

  const up = (x) => {
    setItem((prev) => {
      const key = Object.keys(prev).find((v) => v == x);

      return {
        ...prev,
        [key]: prev[key] + 1,
      };
    });
  };

  const down = (x) => {
    setItem((prev) => {
      const key = Object.keys(prev).find((v) => v == x);

      return {
        ...prev,
        [key]: prev[key] === 0 ? 0 : prev[key] - 1,
      };
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <span>아메리카노 2000원</span>
        <button onClick={() => down("americanoCount")}>-</button>
        <span>{item.americanoCount}</span>
        <button onClick={() => up("americanoCount")}>+</button>
      </div>
      <div>
        <span>라떼 2500원</span>
        <button onClick={() => down("latteCount")}>-</button>
        <span>{item.latteCount}</span>
        <button onClick={() => up("latteCount")}>+</button>
      </div>
      <div>
        <span>모카 3000원</span>
        <button onClick={() => down("moccaCount")}>-</button>
        <span>{item.moccaCount}</span>
        <button onClick={() => up("moccaCount")}>+</button>
      </div>
      <span>
        {item.americanoCount * item.americanoPrice +
          item.moccaCount * item.moccaPrice +
          item.latteCount * item.lattePrice}
        원
      </span>
    </div>
  );
};

export default App;
