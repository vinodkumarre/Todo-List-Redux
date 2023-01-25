import { createSlice, current } from "@reduxjs/toolkit";

const initialUserState = {
  done: [],
};

const doneSlice = createSlice({
  name: "userTodo",
  initialState: initialUserState,
  reducers: {
    doneUser(state, actions) {
      state.done.push(actions.payload);
    },
    doneDeleteUser(state, actions) {
      const currentState = current(state.done);
      const newDone = currentState.filter((x) => x.id !== actions.payload);
      state.done = newDone;
    },
  },
});
export const doneActions = doneSlice.actions;

export default doneSlice.reducer;
