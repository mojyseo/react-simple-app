import { createRef } from "react"

import styled from "styled-components"
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
    updateEditorState,
    getEditorState, getStyleMap
} from 'app/features/appSlice';




export default function Main() {
    const editorRef: any = createRef()

    const editorState = useAppSelector(getEditorState);
    const styleMap = useAppSelector(getStyleMap);
    const dispatch = useAppDispatch();


    function onEditorStateChange(e: EditorState) {
        dispatch(updateEditorState(e))
    }

    return (
        <Container>
            <Editor
                customStyleMap={styleMap}
                ref={editorRef}
                editorState={editorState}
                onChange={onEditorStateChange}
                placeholder="Start Typing!"

            />
        </Container>
    );
}
const Container = styled.div<any>`
    width: 100%;
    height: calc(100vh - 460px);
    border-radius: 6px;
    font-size: 18px;

    div.public-DraftStyleDefault-block {margin: 0 !important
            }
`
