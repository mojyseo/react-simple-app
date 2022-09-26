import styled from "styled-components"
import { Counter } from 'components/App';


export default function Navbar({ routes }: any) {


    return (
        <Container>
            <header className="App-header">
                <Counter />

            </header>
        </Container>
    );
}

const Container = styled.div`

`