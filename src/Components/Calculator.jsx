import React, { Fragment } from "react";
import Keypad from "./UI/Keypad";
import classes from "./Calculator.module.css";

const Calculator = () => {
  return (
    <div className={classes.calculator}>
      <Keypad />
    </div>
  );
};

export default Calculator;
