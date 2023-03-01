import React from "react";
import * as math from "mathjs";


const History = (props) => {
  const getHistory = () => {
    // console.log(props.Index);
    props.click(props.Index)
  };

  return <p onClick={getHistory}>{props.data} = {math.evaluate(props.data)}</p>;
};

export default History;
