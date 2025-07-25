import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchContatti = createAsyncThunk("contact/fetchContatti", async () => {
    const respones = await axios.get("https://dummyjson.com/users")
    return respones.data.users

})


const contattiSlice = createSlice({
    name: "contatti",
    initialState: {
        all: [],
        active: null,
        favorite: []
    },
    reducers: {
        setContatto: (state, action) => {
            state.all = action.payload
        },
        setActiveContatto: (state, action) => {
            state.active = action.payload
        },
        updateContatto: (state, action) => {
            const update = action.payload
            const index = state.all.findIndex(c => c.id === update.id)
            if (index !== -1) state.all[index] = update
            if (state.active?.id === update.id) state.active = update
        },
        deleteContatto: (state, action) => {
            state.all = state.all.filter(c => c.id !== action.payload)
            if (state.active?.id === action.payload) state.active = null
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchContatti.fulfilled, (state, action) => {
            state.all = action.payload;
        });
    }
})



export const { setActiveContatto, setContatto, updateContatto, deleteContatto } = contattiSlice.actions
export default contattiSlice.reducer