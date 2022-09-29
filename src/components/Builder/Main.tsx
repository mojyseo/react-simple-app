import styled from "styled-components"
import { stateToHTML } from 'draft-js-export-html';

import { useAppSelector } from 'app/hooks';
import {
    getEditorState,
    getStyleMap
} from 'app/features/appSlice';

import TextEditor from './TextEditor'

export default function Main() {
    const editorState = (useAppSelector(getEditorState));
    const styleMap = (useAppSelector(getStyleMap));

    function onSave() {

        const content = editorState?.getCurrentContent();
        if (content) {
            //create new array to adapt draft-js-export-html style object structure
            let newStyleMap = {}
            Object.entries(styleMap).forEach(([key, value]) => {
                newStyleMap = {
                    ...newStyleMap, [key]: {
                        style: value,
                    }
                }
            });
            console.log(1, stateToHTML(content, { inlineStyles: newStyleMap }))
            console.log(2, editorState?.getCurrentContent())
            console.log(3, editorState)
            localStorage.setItem('content', stateToHTML(content, { inlineStyles: newStyleMap }));
            // localStorage.setItem('styleMap', JSON.stringify(styleMap));
            alert("content has been saved!")
        } else {
            alert("no content available!")
        }

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