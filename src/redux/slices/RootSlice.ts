import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Name',
        type: 'Type',
        price: 'Price',
        year_made: 'Year Made'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseType: (state, action) => { state.type = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseYear: (state, action) => { state.year_made = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseType, choosePrice, chooseYear } = rootSlice.actions;