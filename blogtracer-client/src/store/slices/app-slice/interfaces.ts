import {  PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { AppLanguage, AppLocation, AppTheme } from "./types";

/** Description: The interface of initial state. */
export interface IAppState {
    language: AppLanguage,
    theme: AppTheme,
    location: AppLocation
}

/** Description: The interface of state reducers. */
export interface IAppReducers extends SliceCaseReducers<IAppState> {
    setLanguage: (state: IAppState, action: PayloadAction<AppLanguage>) => void,
    setTheme: (state: IAppState, action: PayloadAction<AppTheme>) => void,
    setLocation: (state: IAppState, action: PayloadAction<AppLocation>) => void,
}