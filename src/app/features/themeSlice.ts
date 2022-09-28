import { createSlice, } from '@reduxjs/toolkit';
import {
    RootState,
    // AppThunk
} from 'app/store';

export interface themeState {

    mode: 'dark' | 'light';
}

const initialState: themeState = {

    mode: 'light',
};



export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

        toggleMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },

    },
});

export const { toggleMode } = themeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getMode = (state: RootState) => state.theme.mode;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default themeSlice.reducer;
