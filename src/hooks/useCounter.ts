import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  // const [nama, setNama] = useState("rizky");

  // let count = 0;

  const handleIncrement = () => {
    alert("increment");
    // count += 1;
    // alert(count);
    setCount(count + 1);
    // setNama("budi");
  };

  const handleDecrement = () => {
    alert("decrement");
    // count -= 1;
    // alert(count);
    setCount(count - 1);
  };

  const handleResetCounter = () => {
    alert("reset count");
    setCount(0);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleResetCounter,
  };
};
