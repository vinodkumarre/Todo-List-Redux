import React from "react";
import { useSelector } from "react-redux";
import TodoListView from "./TodoListView";

function ListTask() {
  const task = useSelector((state) => state.todos.todos);

  return (
    <div>
      {task.map((todo) => (
        <TodoListView key={todo.id} Todo={todo} />
      ))}
    </div>

  );
}
export default ListTask;
