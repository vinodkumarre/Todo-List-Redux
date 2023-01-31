import React from "react";
import { useSelector } from "react-redux";
import TodoDone from "./TodoDone";

function Done() {
  const task = useSelector((state) => state.done.done);
  return (
    task.map((todo) => (
      <TodoDone key={todo.id} Todo={todo} />
    ))
  );
}
export default Done;
