import { configureStore } from "@reduxjs/toolkit";
import  DataSlice  from "../features/dataSlice";

export const Store = configureStore({
    reducer: {
        Data : DataSlice
    }
})