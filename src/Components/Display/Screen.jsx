import React from "react";
import classes from './Screen.module.css';

const Screen = ()=>{
    return <input type="text" className={classes.calculator_screen} value="0" disabled />
};

export default Screen;