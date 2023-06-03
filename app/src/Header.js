import { React } from "react";
import { useState } from "react";

export const Header = () => {
  function handleClick(e) {
    return console.log(e.target.innerText);
  }

  const [count, setCount] = useState(99);

  function handleAddition() {
    setCount(count + 1)
  }

  function handleSubtraction() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={() => handleAddition()}>+</button>
      <span>{count}</span>
      <button onClick={() => handleSubtraction()}>-</button>
    </>
  );
};
