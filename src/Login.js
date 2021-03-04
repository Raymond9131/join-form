import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ic from "./images/digimonk.jpeg";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
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
              <img className="logo" src={ic} />

              <Form.Group>
                <div className="formicon">
                  <PermPhoneMsgIcon />
                  <Form.Control type="text" placeholder="Enter mobile no." />
                </div>
              </Form.Group>

              <MDBContainer>
                <MDBBtn onClick={this.toggle}>Get OTP</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <MDBModalHeader toggle={this.toggle}>
                    Enter your varification code
                  </MDBModalHeader>
                  <MDBModalBody>
                    <OtpInput
                      value={this.state.otp}
                      onChange={this.handleChange}
                      numInputs={6}
                      separator={<span>-</span>}
                    />
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle}>
                      Close
                    </MDBBtn>
                    <MDBBtn color="primary">Save</MDBBtn>
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
