import { createSlice } from "@reduxjs/toolkit"
import { nav } from "../data";

const initialState = {
    navTitle: "home",
    navNumber: "01",
    navItems: [
        {
            text: "Home",
            link: "/#home"
        },
        {
            text: "About",
            link: "/#about"
        },
        {
            text: "Projects",
            link: "/#projects"
        },
        {
            text: "Members",
            link: "/#members"
        },
        {
            text: "Contact",
            link: "/#contact"
        }
    ]
}

const navSlice = createSlice({
    name: "navTitle",
    initialState,
    reducers: {
        updateTitle: (state,action) => {
            let newPath = action.payload?action.payload: "home";
            if(!nav.hasOwnProperty(newPath)){
                newPath = "error"
            }
            state.navTitle = nav[newPath].navTitle;
            state.navNumber = nav[newPath].navNumber;
            state.navItems = nav[newPath].navItems;
        }
    }
})

export const {updateTitle} = navSlice.actions;

export default navSlice.reducer;