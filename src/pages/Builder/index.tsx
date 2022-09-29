import styled from "styled-components"
import Main from 'components/Builder/Main';
import Sidebar from 'components/Builder/Sidebar';


export default function Builder() {


    return (
        <Container>
            <Main />
            <Sidebar />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 32px 7%;

    .main {
        width: calc(100% - 378px);
        overflow-y:auto ;
    }
    @media only screen and (max-width: 720px) {
    flex-direction: column;
        .main {
        width: 100%;
        height:240px ;
        overflow-y:visible ;
    }
}

`