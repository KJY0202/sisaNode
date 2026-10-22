import useCounter from "../store1";

const Button = () => {
  const { inc } = useCounter();

  return (
    <>
      <button onClick={inc}>+</button>
    </>
  );
};

export default Button;
