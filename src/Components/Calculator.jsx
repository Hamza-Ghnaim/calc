import React from "react";
import Keypad from "./UI/Keypad";
import Screen from "./Display/Screen";
import classes from "./Calculator.module.css";
import History from "./Archive/History";

const Calculator = () => {
  return (
    <div className={classes.calculator}>
      <History/>
      <div className = {classes.rsection}>
        <Screen/>
        <Keypad />
      </div>
        
    </div>
  );
};

export default Calculator;
