import React, { createRef } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

type propsType = {
};
type state = {
    fullName: string;
    bio: string;
};
class Biography extends React.Component<propsType, state> {
    modalRef: any = createRef();
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

    closeModal = () => {
        this.modalRef.current.style.display = "none";
    }
    render() {
        const { fullName, bio, } = this.state
        return (
            <Container>
                <h1>Hi my name is {fullName}</h1>
                <h2>And this is my biography</h2>
                <br />
                <p>{ReactHtmlParser(bio)}</p>

                <div ref={this.modalRef} className="modal">

                    <div className="modal-content">
                        <span onClick={this.closeModal} className="close">&times;</span>
                        <h3>My contact info: </h3>
                        <p>Email: mojyseo@gmail.com</p>
                        <p>phone: +989117911780</p>
                    </div>

                </div>
            </Container>
        );
    }
}

const Container = styled.main`
    padding: 32px 8%;
    p { 
        font-size:24px;
    }
    
    .modal {
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
  color:#000; 

}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 8px;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
    `

export default Biography;