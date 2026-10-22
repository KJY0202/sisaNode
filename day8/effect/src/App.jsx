import { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((v) => v.json())
      .then((v) =>
        setItems((prev) => {
          const newArr = v.products;
          return newArr;
        }),
      );
  }, []);

  return (
    <>
      {items.map((v) => {
        return (
          <>
            <div>{v.title}</div>
            <div>{v.description}</div>
            <div>{v.price}</div>
          </>
        );
      })}
    </>
  );
};

export default App;
