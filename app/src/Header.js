import { React } from "react";

export const Header = () => {
  function handleClick(e){
    return(
      console.log(e.target.innerText)
    )
  }
  return (
    <>
    <h1>hello world !</h1>
    <button onClick={(e) => handleClick(e)}>click me</button>
    </>
  )
}
