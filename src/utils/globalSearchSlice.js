import { createSlice } from "@reduxjs/toolkit";

const globalSearchSlice = createSlice({
    name: "global",
    initialState :{
        globalSearch : null
    },  
    reducers : {
        globalSearch : (state, action)=>{
            state.globalSearch = action.payload;
        },
        removeGlobalSearch : (state, action)=>{
            state.globalSearch = action.payload;
        }

    }
}); 

export const {globalSearch, removeGlobalSearch} = globalSearchSlice.actions;
export default globalSearchSlice.reducer;