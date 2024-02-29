import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    navTitle: "home",
    navNumber: "01"
}

const navSlice = createSlice({
    name: "navTitle",
    initialState,
    reducers: {
        updateTitle: (state,action) => {
            state.navTitle = action.payload.navTitle;
            state.navNumber = action.payload.navNumber;
        }
    }
})

export const {updateTitle} = navSlice.actions;

export default navSlice.reducer;