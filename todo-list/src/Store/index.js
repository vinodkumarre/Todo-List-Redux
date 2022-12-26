import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";
import projectReducer from "./project";

const store = configureStore({ reducer: { todos: todoReducer, project: projectReducer } });

export default store;
