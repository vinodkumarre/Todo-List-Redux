
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";
import todoReducer from "./todo";

const store = configureStore({ reducer:{counter:counterReducer, todos:todoReducer}});

export default store;