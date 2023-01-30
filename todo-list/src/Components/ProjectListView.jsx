import React from "react";
import { useSelector } from "react-redux";
import TodoListView from "./TodoListView";

function ProjectListView(props) {
  const task = useSelector((state) => state.todos.todos);
  const d = task.filter((v) => {
    const fu = props.projectList.todos && props.projectList.todos.find((f) => f.id === v.id);
    if (fu) {
      return true;
    }
    return false;
  });

  return (
    <div>
      {d.map((todo) => (
        <TodoListView key={todo.id} Todo={todo} />
      ))}
    </div>

  );
}
export default ProjectListView;
