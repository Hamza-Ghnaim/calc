import React, { Fragment } from "react";
import classes from "./Keypad.module.css";

const Keypad = () => {
  return (
    <Fragment>
      <div className={classes.calculator_keys}>
        <button type="button" value="+">
          0
        </button>
        <button type="button" value="+">
          1
        </button>
        <button type="button" value="+">
          2
        </button>
        <button type="button" value="+">
          3
        </button>
        <button type="button" value="+">
          4
        </button>
        <button type="button" value="+">
          5
        </button>
        <button type="button" value="+">
          6
        </button>
        <button type="button" value="+">
          7
        </button>
        <button type="button" value="+">
          8
        </button>
        <button type="button" value="+">
          9
        </button>
        <button type="button" value="+">
          .
        </button>
        <button type="button" value="+">
          +
        </button>
        <button type="button" value="+">
          -
        </button>
        <button type="button" value="+">
          *
        </button>
        <button type="button" value="+">
          /
        </button>
        <button type="button" value="+">
          (
        </button>
        <button type="button" value="+">
          )
        </button>
        <button type="button" value="+">
          Del
        </button>
        <button type="button" className={classes.equal} value="+">
          =
        </button>
      </div>
    </Fragment>
  );
};

export default Keypad;
