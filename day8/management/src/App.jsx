import OneDepth from "./organism/OneDepth";
import useCounter from "./store1";

const App = () => {
  const { count } = useCounter();
  return (
    <>
      <span>{count}</span>
      <OneDepth />
    </>
  );
};

export default App;
