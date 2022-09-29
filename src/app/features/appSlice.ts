import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    RootState,
    // AppThunk
} from 'app/store';

import { EditorState } from 'draft-js';
export interface appState {
    fontSize: string;
    color: string;
    editorState: EditorState;
    styleMap: any;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: appState = {
    fontSize: "16px",
    color: "#000",
    editorState: EditorState.createEmpty(),
    styleMap: {},
    status: 'idle',
};



export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

        changeStyles: (state, action: PayloadAction<string>) => {
            state.fontSize = action.payload;
        },
        updateEditorState: (state, action: PayloadAction<EditorState>) => {
            state.editorState = action.payload;
        },
        updateStyleMap: (state, action: PayloadAction<Object>) => {
            state.styleMap = { ...state.styleMap, ...action.payload };
        },

    },
});

export const { changeStyles, updateEditorState, updateStyleMap } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStyles = (state: RootState) => state.app.fontSize;
export const getEditorState = (state: RootState) => state.app.editorState;
export const getStyleMap = (state: RootState) => state.app.styleMap;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default appSlice.reducer;
