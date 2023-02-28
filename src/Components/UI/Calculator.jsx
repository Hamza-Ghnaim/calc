import React, { useState } from "react";
import { useEffect } from "react";
import classes from "./Calculator.module.css";
import History from "../Archive/History";
import * as math from "mathjs";

const Calculator = (result) => {
  const [Output, setOutput] = useState("");
  const [Operation, setOperation] = useState([]);

  // useEffect(() => {
  //   console.log(Operation);
  // }, [Operation]);

  // useEffect(() => {
  //   console.log(Output);
  //   console.log(Operation);
  // }, [Output]);

  const handleClick = (event) => {
    if (Output === "" || Output === undefined) {
      setOutput(event.target.value);
      show(Output);
    } else {
      setOutput(Output + event.target.value);
      show(Output);
    }
  };

  const deleteEntry = () => {
    setOutput(Output.slice(0, -1));
  };

  const calculate = () => {
    let result = math.evaluate(Output);
    if (result !== undefined) {
      setOperation([...Operation, Output]);
      setOutput(result.toString());
      show(result);
    } else {
      alert("please enter a valid expression");
    }
  };
  const show = (result) => {
    let screen = document.getElementById("screen");
    screen.value = result;
  };

  return (
    <div className={classes.calculator}>
      {Operation && (
        <div className={classes.history}>
          {Operation.map((operation, index) => (
            <History key={index} data={operation} />
          ))}
        </div>
      )}
      <div className={classes.rsection}>
        <input
          type="text"
          id="screen"
          className={classes.calculator_screen}
          value={Output}
          disabled
        />
        <div id="calculator_keys" className={classes.calculator_keys}>
          <button type="button" onClick={handleClick} value="0">
            0
          </button>
          <button type="button" onClick={handleClick} value="1">
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
          <button type="button" onClick={deleteEntry} value="Del">
            Del
          </button>
          <button
            type="button"
            onClick={calculate}
            className={classes.equal}
            value="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
