import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ic from "../images/digimonk.jpeg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import OtpInput from "react-otp-input";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export default class Login extends Component {
  state = {
    modal: false,
    otp: "",
  };
  handleChange = (otp) => this.setState({ otp });

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <>
        <div className="login">
          <div className="mainlg">
            <div className="centerdiv">
              <img className="phone" src={ic} />
              <div className="aligncenter">
                <h2>Welcome to K-MANTRA</h2>
                <p>Enter your id and we will send you an OTP</p>
              </div>
              <Form.Group>
                <div className="formicon">
                  <MailOutlineIcon />
                  <Form.Control type="text" placeholder="Enter email-id" />
                </div>
              </Form.Group>

              <MDBContainer className="centerall">
                <MDBBtn onClick={this.toggle}>Get OTP</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <MDBModalHeader toggle={this.toggle}>
                    Enter your varification code
                  </MDBModalHeader>
                  <MDBModalBody>
                    <div className="otp-box">
                      <OtpInput
                        containerStyle
                        inputStyle
                        value={this.state.otp}
                        onChange={this.handleChange}
                        numInputs={6}
                        separator={<span>-</span>}
                      />
                    </div>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="danger">Save</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBContainer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
