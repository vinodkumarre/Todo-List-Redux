/* eslint-disable no-param-reassign */
import { createSlice, current } from "@reduxjs/toolkit";

const initialUserState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "userTodo",
  initialState: initialUserState,
  reducers: {
    addUser(state, actions) {
      state.todos.push(actions.payload);
    },
    editUser(state, actions) {
      const currentState = current(state.todos);
      console.log(actions.payload);
      console.log(currentState);
      const newTodos = currentState.findIndex((x) => x.id === actions.payload.id);
      state.todos[newTodos] = {
        ...state.todos[newTodos],
        ...actions.payload,
      };
      console.log(newTodos);
    },
  },
});
export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
