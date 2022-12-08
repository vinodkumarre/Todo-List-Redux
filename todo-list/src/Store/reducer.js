
import { createSlice } from '@reduxjs/toolkit';





const instialState = {
    showPopUp: false,
}






const counterReducer = createSlice({
    name: "user",
    initialState: instialState,
    reducers: {
        clicked(state) {
            state.showPopUp= !state.showPopUp;
        },
        back(state){
            state.showPopUp= false;

        }
    },
});

export const counterAction = counterReducer.actions;

export default counterReducer.reducer;