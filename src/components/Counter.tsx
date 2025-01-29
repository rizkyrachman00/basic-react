import { useCounter } from "../hooks/useCounter";


const Counter = () => {
  const { count, handleIncrement, handleDecrement, handleResetCounter } =
    useCounter();

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={handleDecrement}>-</button>
      <p style={{ fontSize: "28px" }}>{count}</p>
      {/* <p style={{ fontSize: "28px" }}>{nama}</p> */}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleResetCounter}>Reset Count</button>
    </div>
  );
};

export default Counter;
