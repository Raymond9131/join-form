import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ic from "../images/digimonk.jpeg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import OtpInput from "react-otp-input";
import axios from "axios";
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
    email: "",
    modal: false,
    otp: "",
  };
  handleChange = (otp) => this.setState({ otp });

  handleemail = (email) => this.setState({ email });

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleAll = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getotp = (event) => {
    event.preventDefault();
    console.log("Hello");
    let data = {
      email: this.state.email,
    };
    console.log("to check", data);
    axios({
      method: "post",
      url: "http://203.190.153.22:3002/api/login",
      data: data,
    }).then((resp) => {
      console.log(resp, "comming or not", resp.data.status);
      if (resp.data.status === "success") {
        this.setState({
          modal: true,
        });
        console.log("token,", resp.data.token);
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("userId", resp.data.data.id);
      }

      console.log(resp);
    });
    this.toggle();
  };


  submit = (event) => {
    event.preventDefault();

    let data = {
      email: this.state.email,
      otp: this.state.otp,
    };
    console.log("varification data", data);
    axios({
      method: "post",
      url: "http://203.190.153.22:3002/api/verification",
      data: data,
    }).then(
      (resp) => {
        console.log("response", resp);
        if (resp.data.status === "success") {
          localStorage.getItem("token", resp.data.token);
          console.log(resp.data.token);
          this.props.history.push("/form");
        }
      }

    );
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
                  <Form.Control
                    type="text"
                    placeholder="Enter email-id"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleAll}
                  />
                </div>
              </Form.Group>
              <Form.Group className="text-center">
                <MDBBtn onClick={this.getotp}>Get OTP</MDBBtn>
              </Form.Group>

              <MDBContainer className="centerall">


                {/* =========OTP Screen====== */}

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
                    <MDBBtn color="danger" onClick={this.submit}>
                      Save
                    </MDBBtn>
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
