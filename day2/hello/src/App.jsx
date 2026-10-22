import RedSquare from "./RedSquare";
import YellowSquare from "./YellowSquare";
import BlueSquare from "./BlueSquare";
import Square from "./Square";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <RedSquare></RedSquare>
      <YellowSquare></YellowSquare>
      <BlueSquare></BlueSquare>
      <Square a={"red"}></Square>
      <Square a={"yellow"}></Square>
      <Square a={"blue"}></Square>
    </div>
  );
};

export default App;

/* 
jsx = html + js
 */
