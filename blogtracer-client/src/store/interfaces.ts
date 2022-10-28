import { AnyAction, Reducer } from "@reduxjs/toolkit";
// Slices
import appSlice from "./slices/app-slice";
// Interfaces
import { IAppState } from "./slices/app-slice/interfaces";

export interface IRootReducer {
    [appSlice.name]: Reducer<IAppState, AnyAction>
}