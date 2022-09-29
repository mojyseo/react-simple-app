import styled from "styled-components"
import ReactHtmlParser from 'react-html-parser';


export default function Content() {
    let html = (localStorage.getItem("content"))


    return (
        <Container>
            {ReactHtmlParser(html || "no content has been added yet.")}
        </Container>
    );
}

const Container = styled.div`
    padding: 32px 8%;
`