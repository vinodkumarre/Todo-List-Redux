/* eslint-disable no-param-reassign */
import { createSlice, current } from "@reduxjs/toolkit";

const initialNameState = {
  names: [],
};

const projectSlice = createSlice({
  name: "projectName",
  initialState: initialNameState,
  reducers: {
    project(state, actions) {
      const newObject = { name: actions.payload.name, todos: [] };
      state.names.push(newObject);
    },
    projectAddUser(state, actions) {
      // eslint-disable-next-line no-debugger
      // debugger;
      const currentState = current(state.names);
      const itemIndex = currentState.findIndex((item) => item.name === actions.payload.name);
      console.log(itemIndex);
      if (itemIndex !== -1) {
        const existingItemTodos = currentState[itemIndex].todos;
        const updatedItem = {
          name: actions.payload.name,
          todos: [...existingItemTodos, actions.payload.newTodo],
        };
        const newNames = [...currentState];
        newNames[itemIndex] = updatedItem;
        console.log(newNames);
        state.names = newNames;
      }
    },
  },
});
export const projectActions = projectSlice.actions;

export default projectSlice.reducer;
