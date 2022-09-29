import {
    createRef,
    // useEffect
} from "react"

import styled from "styled-components"
import { Editor, EditorState } from 'draft-js';
// import { stateFromHTML } from 'draft-js-import-html';
import 'draft-js/dist/Draft.css';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
    updateEditorState,
    getEditorState,
    getStyleMap
} from 'app/features/appSlice';




export default function Main() {
    const editorRef: any = createRef()

    const editorState = useAppSelector(getEditorState);
    const styleMap = useAppSelector(getStyleMap);
    const dispatch = useAppDispatch();


    //load from localStorage
    // useEffect(() => {
    // let oldContent = (localStorage.getItem("content"))
    // let styleMap = (localStorage.getItem("styleMap"))

    // if (oldContent && styleMap) {

    //     let options: any = { inlineStyles: JSON.parse(styleMap) }
    //     dispatch(updateEditorState(EditorState.createWithContent(stateFromHTML(oldContent, options))))
    // }
    //eslint-disable-next-line
    // }, [])


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

    div.public-DraftStyleDefault-block {
        margin: 0 !important
            }
            @media only screen and (max-width: 720px) {
                height: 200px;
            }   

`
