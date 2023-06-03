import { React } from "react";
import { useState } from "react";

export const Header = () => {
  function handleClick(e) {
    return console.log(e.target.innerText);
  }

  const [count, setCount] = useState(99);
  const [click, setclick] = useState("CLICK ME");

  function handleAddition() {
    setCount(count + 1)
  }

  function handleSubtraction() {
    setCount(count - 1);
  }

  function handleClick() {
    setclick("I GOT CLICKED !");
    
  }

  return (
    <>
      <button onClick={() => handleAddition()}>+</button>
      <span>{count}</span>
      <button onClick={() => handleSubtraction()}>-</button>

      <p>{click}</p>
      <button onClick={handleClick}>click me !</button>
    </>
  );
};
