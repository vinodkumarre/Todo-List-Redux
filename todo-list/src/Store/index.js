import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";
import projectReducer from "./project";
import doneReducer from "./doneReducer";

const store = configureStore({
  reducer: { todos: todoReducer, project: projectReducer, done: doneReducer },
});

export default store;
