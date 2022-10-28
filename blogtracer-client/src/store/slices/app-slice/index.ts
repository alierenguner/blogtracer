import { createSlice } from '@reduxjs/toolkit';
import { IAppReducers } from './interfaces';
import appState from './state';

const appSlice = createSlice({
    name: 'app',
    initialState: appState,
    reducers: {
        setLanguage: (state, action) => { state.language = action.payload },
        setTheme: (state, action) => { state.theme = action.payload },
        setLocation: (state, action) => { state.location = action.payload }

    } as IAppReducers
})

export default appSlice;