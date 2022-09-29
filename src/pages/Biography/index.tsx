import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

type propsType = {
};
type state = {
    fullName: string;
    bio: string;
};
class Biography extends React.Component<propsType, state> {
    state: state = {
        // optional second annotation for better type inference
        fullName: "Mojtaba Madadi",
        bio: `I'm a web developer and my profession is React.js.
      beside working for companies, i have a good experience as a freelancer and an contractor.
      <br />
      <br />
       
      I have experience working with as a fullstack developer & also have some experience using web servers and Linux-based systems for production. 
      <br />
      Beside websites I've also worked on business dashboards, planning and designing these kind of systems for several use cases.
      <br />
      <br />
     and It's a good day for me when i learn or create something new!
      `,
    };
    render() {
        const { fullName, bio, } = this.state
        return (
            <Container>
                <h1>Hi my name is {fullName}</h1>
                <h2>And this is my biography</h2>
                <br />
                <p>{ReactHtmlParser(bio)}</p>
            </Container>
        );
    }
}

const Container = styled.main`
    padding: 32px 8%;
    p { 
        font-size:24px;
    }
`

export default Biography;