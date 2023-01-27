import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Todo";
import projectReducer from "./Project";
import doneReducer from "./DoneReducer";

const store = configureStore({
  reducer: { todos: todoReducer, project: projectReducer, done: doneReducer },
});

export default store;
