import { createSlice } from "@reduxjs/toolkit";


export const DataSlice = createSlice({
    name: "Data",
    initialState: [],
    reducers: {
        setData: (state, action) => {
            state.push(action.payload)
        },
        updateData: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
        
    }
})

export const { setData, updateData } = DataSlice.actions;

export default DataSlice.reducer