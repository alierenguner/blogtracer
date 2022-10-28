import { configureStore } from "@reduxjs/toolkit";
import { IRootReducer } from "./interfaces";
import appSlice from "./slices/app-slice";

const rootReducer: IRootReducer = {
    [appSlice.name]: appSlice.reducer
}

const storeContext = configureStore({ 
    reducer: rootReducer, 
    devTools: true,
})

export default storeContext;