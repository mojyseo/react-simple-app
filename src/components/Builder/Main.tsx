import styled from "styled-components"
import { stateToHTML } from 'draft-js-export-html';

import { useAppSelector } from 'app/hooks';
import {
    getEditorState, getStyleMap
} from 'app/features/appSlice';

import TextEditor from './TextEditor'

export default function Main() {
    const editorState = (useAppSelector(getEditorState).getCurrentContent());
    const styleMap = (useAppSelector(getStyleMap));

    let y = {}
    Object.entries(styleMap).forEach(([key, value]) => {
        y = {
            ...y, [key]: {
                style: value,
            }
        }
    });
    console.log(y)
    function onSave() {
        console.log("editorState!!!!!!!!!", stateToHTML(editorState, { inlineStyles: y }));
        localStorage.setItem('content', stateToHTML(editorState, { inlineStyles: y }));
        alert("content has been saved!")
    }

    return (
        <Container className="main">

            <TextEditor />

            <div>
                <button className="btn"
                    onClick={onSave}
                >
                    Save
                </button>
            </div>
        </Container>
    );
}
const Container = styled.main`

`