import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, handleIncrement, handleDecrement, handleResetCounter } =
    useCounter();

  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState<string>("rizky");
  const [job, setJob] = useState<string>();

  const [user, setUser] = useState({
    age: 0,
    name: "rizky",
    job: "",
  });

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
