import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'app/store';

export interface appState {
    styles: Object;
    font: string;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: appState = {
    styles: {},
    font: 'inherit',
    status: 'idle',
};



export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

        changeStyles: (state, action: PayloadAction<number>) => {
            state.styles = action.payload;
        },

    },
});

export const { changeStyles, } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStyles = (state: RootState) => state.app.styles;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default appSlice.reducer;
