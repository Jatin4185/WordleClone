import React from "react";
import { Letter } from "./Letter";

export const Board = () => {
  return (
    <div className="board">
      <Row rowNum={0} />
      <Row rowNum={1} />
      <Row rowNum={2} />
      <Row rowNum={3} />
      <Row rowNum={4} />
      <Row rowNum={5} />
    </div>
  );
};

const Row = ({ rowNum }) => {
  return (
    <div className="row">
      <Letter attemptVal={rowNum} letterPos={0} />
      <Letter attemptVal={rowNum} letterPos={1} />
      <Letter attemptVal={rowNum} letterPos={2} />
      <Letter attemptVal={rowNum} letterPos={3} />
      <Letter attemptVal={rowNum} letterPos={4} />
    </div>
  );
};
