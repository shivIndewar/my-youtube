import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import globalSearchSlice from "./globalSearchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer :{
        app : appSlice,
        search : searchSlice,
        global : globalSearchSlice,
        chat : chatSlice  
    }
});

export default store;

