import React from "react";
import classes from "./Calculator.module.css";
// import History from "./Archive/History";

const handleClick = (event)=>{
  console.log(event.target.value);
}

const Calculator = (result) => {
  return (
    <div className={classes.calculator}>
      {/* <History/> */}
      <div className = {classes.rsection}>
      <input type="text" className={classes.calculator_screen} value="0" disabled />
      <div id = "calculator_keys" className={classes.calculator_keys}>
        <button type="button" onClick={handleClick} value="0">
          0
        </button>
        <button type="button"onClick={handleClick} value="1">
          1
        </button>
        <button type="button" onClick={handleClick} value="2">
          2
        </button>
        <button type="button" onClick={handleClick} value="3">
          3
        </button>
        <button type="button" onClick={handleClick} value="4">
          4
        </button>
        <button type="button" onClick={handleClick} value="5">
          5
        </button>
        <button type="button" onClick={handleClick} value="6">
          6
        </button>
        <button type="button" onClick={handleClick} value="7">
          7
        </button>
        <button type="button" onClick={handleClick} value="8">
          8
        </button>
        <button type="button" onClick={handleClick} value="9">
          9
        </button>
        <button type="button" onClick={handleClick} value=".">
          .
        </button>
        <button type="button" onClick={handleClick} value="+">
          +
        </button>
        <button type="button" onClick={handleClick} value="-">
          -
        </button>
        <button type="button" onClick={handleClick} value="*">
          *
        </button>
        <button type="button" onClick={handleClick} value="/">
          /
        </button>
        <button type="button" onClick={handleClick} value="(">
          (
        </button>
        <button type="button" onClick={handleClick} value=")">
          )
        </button>
        <button type="button" onClick={handleClick} value="Del">
          Del
        </button>
        <button type="button" onClick={handleClick} className={classes.equal} value="+">
          =
        </button>
      </div>
      </div>
        
    </div>
  );
};

export default Calculator;
