import React from "react";

const History = (props) => {
  const getHistory = () => {
    console.log(props.Index);
  };

  return <p onClick={getHistory}>{props.data}</p>;
};

export default History;
