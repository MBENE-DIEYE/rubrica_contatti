import { configureStore } from '@reduxjs/toolkit'
import contattiReducer from './slices/contattiSlice'
export default configureStore({
    reducer: {
        contatti: contattiReducer
    }
})