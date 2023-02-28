import React,{useState} from "react";
import { useEffect } from "react";
import classes from "./Calculator.module.css";
import History from "../Archive/History";
import * as math from 'mathjs';



const Calculator = (result) => {

  const [Output,setOutput] = useState("");

  useEffect(() => {
    console.log(Output);
    showOutput(Output);
  }, [Output]);

  const handleClick = async (event)=>{
    setOutput(Output+event.target.value);

  };

  const calculate = ()=>{
    setOutput(math.evaluate(Output));
    console.log(math.evaluate(Output));
    
  };

  const showOutput =async (prop)=>{
    let screen = document.getElementById("screen");
    screen.value =screen.value+prop;
  };



  
  return (
    <div className={classes.calculator}>
      {/* <History/> */}
      <div className = {classes.rsection}>
      <input type="text" id = "screen" className={classes.calculator_screen} value="0" disabled />
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
        <button type="button" onClick={calculate} className={classes.equal} value="=">
          =
        </button>
      </div>
      </div>
        
    </div>
  );
};

export default Calculator;
