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
      const currentState = current(state.names);
      const itemIndex = currentState.findIndex((item) => item.name === actions.payload.name);
      if (itemIndex !== -1) {
        const existingItemTodos = currentState[itemIndex].todos;
        const updatedItem = {
          name: actions.payload.name,
          todos: [...existingItemTodos, actions.payload.newTodo],
        };
        const newNames = [...currentState];
        newNames[itemIndex] = updatedItem;
        state.names = newNames;
      }
    },
  },
});
export const projectActions = projectSlice.actions;

export default projectSlice.reducer;
