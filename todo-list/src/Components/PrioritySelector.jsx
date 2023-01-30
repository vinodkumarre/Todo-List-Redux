import React from "react";
import TodoListView from "./TodoListView";

function PrioritySelector(props) {
  return (
    <div>
      {props.priorityChange.map((todo) => (
        <TodoListView key={todo.id} Todo={todo} />
      ))}
    </div>
  );
}
export default PrioritySelector;
