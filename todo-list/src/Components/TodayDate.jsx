import React from "react";
import { useSelector } from "react-redux";
import TodoListView from "./TodoListView";

function TodayDate() {
  const task = useSelector((state) => state.todos.todos);
  const newTask = task.filter(
    (t) => t.date.toLocaleDateString() === new Date().toLocaleDateString(),
  );
  console.log(newTask);

  return (
    <div>
      {newTask.map((todo) => (
        <TodoListView key={todo.id} Todo={todo} />
      ))}
    </div>
  );
}
export default TodayDate;
