import { useState } from "react";

const Cart = () => {
  const [price, setPrice] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <span>아이스티 2000원</span>
        <button
          className="bg-amber-600 cursor-pointer"
          onClick={() => setPrice((prev) => prev + 2000)}
        >
          구매
        </button>
      </div>
      <div>
        <span>초코라떼 3500원</span>
        <button
          className="bg-amber-950 cursor-pointer"
          onClick={() => setPrice((prev) => prev + 3500)}
        >
          구매
        </button>
      </div>
      <div>
        <span>아메리카노 1500원</span>
        <button
          className="bg-blue-800 cursor-pointer"
          onClick={() => setPrice((prev) => prev + 1500)}
        >
          구매
        </button>
      </div>
      <button className="bg-red-600 cursor-pointer" onClick={() => setPrice(0)}>
        초기화
      </button>
      <span>총 금액 : {price}원</span>
    </div>
  );
};

export default Cart;
