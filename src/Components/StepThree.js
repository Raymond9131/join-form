import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class StepThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankname: "",
      ifsccode: "",
      bankaccount: "",
      pfaccount: "",

      banknameError: "",
      ifsccodeError: "",
      bankaccountError: "",
    };
  }

  handleAll1 = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  //===== Validation ========

  validate() {
    if (this.state.bankname === "") {
      this.setState({ bankaccountError: "Bank name is require" });
    }

    if (this.state.ifsccode === "") {
      this.setState({ ifsccodeError: "ifsc code is missing!" });
    }

    if (this.state.bankaccount === "") {
      this.setState({ bankaccountError: "Account no. is missing" });
    }
  }

  //======== API integration=========

  submit = (event) => {
    event.preventDefault();
    this.validate();
    if (
      this.state.bankname !== "" &&
      this.state.ifsccode !== "" &&
      this.state.bankaccount !== ""
    ) {
      try {
        let data = {
          bankname: this.state.bankname,
          ifsccode: this.state.ifsccode,
          bankaccount: this.state.bankaccount,
        };
        axios
          .put("http://203.190.153.22:3002/api/update/bankdetails/147", data)

          .then((result) => {
            console.log(result);
          });
      } catch (error) {
        console.log(error);
      }
      this.props.stepthreetofour();

      // this.props.stepthreetofour({
      //   step3Data: this.state,
      //   step2Data: this.props.formValue,
      // });
    }
  };

  render() {
    return (
      <>
        <section>
          <Container>
            <h2 className="mt-5">Financial Details </h2>
            <Row>
              <Col className="mt-4">
                <p>Bank Name</p>
                <input
                  type="text"
                  name="bankname"
                  value={this.state.bankname}
                  onChange={this.handleAll1}
                  placeholder="Enter Account Name"
                />
              </Col>
            </Row>
            <div className="error">{this.state.banknameError}</div>

            <Row>
              <Col className="mt-4">
                <p>IFSC Code</p>
                <input
                  type="text"
                  name="ifsccode"
                  value={this.state.ifsccode}
                  onChange={this.handleAll1}
                  placeholder="Enter IFSC code"
                />
              </Col>
            </Row>
            <div className="error">{this.state.ifsccodeError}</div>

            <Row>
              <Col className="mt-4">
                <p>Bank Account No.</p>
                <input
                  type="number"
                  name="bankaccount"
                  value={this.state.bankaccount}
                  onChange={this.handleAll1}
                  placeholder="Enter Account No."
                />
              </Col>
            </Row>
            <div className="error">{this.state.bankaccountError}</div>

            <Row>
              <Col className="mt-4">
                <p>PF Account No.</p>
                <input
                  type="number"
                  name="pfaccount"
                  value={this.state.pfaccount}
                  onChange={this.handleAll1}
                  placeholder="Enter PF No."
                />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col className="text-center">
                <button className="btn btn-dark" onClick={this.submit}>
                  Next
                </button>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
