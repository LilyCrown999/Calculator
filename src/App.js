import { useState } from "react";
import { evaluate } from "mathjs";

import Button from "./component/Button";
import Input from "./component/Input";


function App() {

  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToText = (val) => {
    setText((text) => [...text, val + ''])
  }

  const calculateResult = () => {
    const input = text.join("") //Remove all commas

    setResult(evaluate(input));
  }

  const resetInput = () => {
    setText("")
    setResult("")
  }
  const ButtonColor = "#f2a33c";

  return (
    <>
      <h1 className="head"> Calculator </h1>
      <div className="App">
      <div className="calc-wrapper">
        <Input className="fit" text={text} result={result}/>
      <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9"handleClick={addToText}/>
          <Button symbol="/" color={ButtonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" color={ButtonColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color={ButtonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" color="rgb(72, 170, 259)" handleClick={calculateResult}/>
          <Button symbol="-" color={ButtonColor} handleClick={addToText}/>
        </div>
        <Button symbol="Clear" color="#ff352e" handleClick={resetInput}/>
      </div>
    </div>
    </>

  );
}

export default App;
