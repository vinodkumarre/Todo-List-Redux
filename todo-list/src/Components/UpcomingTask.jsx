import React from "react";
import TodoListView from "./TodoListView";

function UpcomingTask(props) {
  return (
    <div>
      {props.upCome.map((todo) => (
        <TodoListView key={todo.id} Todo={todo} />
      ))}
    </div>

  );
}
export default UpcomingTask;
