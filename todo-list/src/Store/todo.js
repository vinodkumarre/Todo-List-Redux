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
  },
});
export const todoActions = todoSlice.actions;

export default todoSlice.reducer;