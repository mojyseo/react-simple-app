import styled from "styled-components"
import { useRef } from 'react';

import { RichUtils } from 'draft-js';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
    updateEditorState,
    getEditorState,
    updateStyleMap
} from 'app/features/appSlice';
import {
    getMode
} from 'app/features/themeSlice';

export default function Main() {
    const colorRef: any = useRef(null)
    const sizeRef: any = useRef(null)

    const editorState = useAppSelector(getEditorState);
    const mode = useAppSelector(getMode);
    const dispatch = useAppDispatch();

    function onColorChange(event: React.MouseEvent<HTMLElement>) {
        let newColor = (colorRef?.current?.value);
        dispatch(updateStyleMap({ [newColor]: { color: newColor } }))
        dispatch(updateEditorState(RichUtils.toggleInlineStyle(editorState, newColor)))
    }
    function onSizeChange(event: React.MouseEvent<HTMLElement>) {
        let newSize = (sizeRef?.current?.value);
        console.log(newSize)

        dispatch(updateStyleMap({ [`FONT${newSize}`]: { fontSize: `${newSize}px` } }))
        dispatch(updateEditorState(RichUtils.toggleInlineStyle(editorState, `FONT${newSize}`)))
    }


    return (
        <Container className="sidebar" theme={mode}>
            <h3>Create Your Style!</h3>

            <div>
                <h4>Choose a color to apply to selected text.</h4>
                <div className="row">
                    <input type="color" className="colorInput" ref={colorRef} />
                    <button className="btn-dark"
                        onClick={onColorChange}
                    >
                        set
                    </button>
                </div>
            </div>
            <div style={{ marginTop: 64 }}>
                <h4>Enter a font size to apply to selected text.</h4>
                <div className="row">
                    <input type="number" defaultValue={16} max={180} min={4} ref={sizeRef} className="sizeInput" />
                    <span>px</span>
                    <button className="btn-dark"
                        onClick={onSizeChange}
                    >
                        set
                    </button>
                </div>
            </div>
        </Container>
    );
}
const Container = styled.aside`
    padding: 32px 42px;
    width: 248px;
    min-height: calc(100vh - 280px);
    border-radius: 10px;
    background: #000000b3;
    color: white;
    box-shadow: 0px 4px 12px 4px ${({ theme }) => theme === 'dark' ? "#4f505c5e" : "#242a695e"} ;
    backdrop-filter: blur( 4px );
h4 {
    font-weight:normal ;
}
.colorInput {
    height: 44px;
}
.sizeInput {
    width:54px;
}
.row span {
    align-self: center;
    margin-right: 8px;
}

`