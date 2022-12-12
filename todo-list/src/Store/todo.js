import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'userTodo',
  initialState: initialUserState,
  reducers: {
    addUser(state, actions) {
      state.todos.push(actions.payload);
    },
    editUser(state, actions) {
      const newTodos = state.todos.filter(todo => todo.id !== actions.payload)
      // state.todos = state.todos.push(newTodos)
    },
  },
});
export const todoActions = todoSlice.actions;

export default todoSlice.reducer;