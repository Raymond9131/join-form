import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class StepFour extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      fname: "",
      relation: "",
      mobile: "",
      presentaddress: "",
      fnameError: "",
      relationError: "",
      mobileError: "",
    };
  }

  onClickn1 = (event) => {
    console.log("hi", event, this.state, this.props);
    event.preventDefault();
  };

  handleAll1 = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  validate() {
    if (this.state.fname === "") {
      this.setState({ fnameError: "name is required" });
    }

    if (this.state.relation === "") {
      this.setState({ relationError: "Define Relation" });
    }

    if (this.state.mobile === "") {
      this.setState({ mobileError: "Number is missing" });
    }
  }

  submit = (event) => {
    event.preventDefault();
    this.validate();
    if (
      this.state.fname !== "" &&
      this.state.relation !== "" &&
      this.state.mobile !== ""
    ) {
      try {
        let data = {
          fname: this.state.fname,
          relation: this.state.relation,
          mobile: this.state.mobile,
        };
        axios
          .put("http://203.190.153.22:3002/api/update/emergencydetails/16", data)
          .then((result) => {
            console.log(result);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  
  render() {
    return (
      <>
        <section>
          <Container>
            <h2 className="mt-5">Emergency Contact Details</h2>
            <form onSubmit={this.onClickn1}>
              <Row className="mt-5">
                <Col>
                  <p>Name</p>
                  <input
                    type="text"
                    name="fname"
                    value={this.state.fname}
                    onChange={this.handleAll1}
                    placeholder="Enter Name"
                  />
                </Col>
              </Row>
              <div className="error">{this.state.fnameError}</div>

              <Row className="mt-4">
                <Col>
                  <p>Relation</p>
                  <input
                    type="text"
                    name="relation"
                    value={this.state.relation}
                    onChange={this.handleAll1}
                    placeholder="Enter Relation"
                  />
                </Col>
              </Row>
              <div className="error">{this.state.relationError}</div>

              <Row className="mt-4">
                <Col>
                  <p>Contact No.</p>
                  <input
                    type="number"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.handleAll1}
                    placeholder="Enter Number"
                  />
                </Col>
              </Row>
              <div className="error">{this.state.mobileError}</div>

              <Row className="mt-4">
                <Col>
                  <p>Address</p>
                  <textarea
                    name="presentaddress"
                    value={this.state.presentaddress}
                    onChange={this.handleAll1}
                  ></textarea>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col className="col-md-12">
                  <div className="checklsbel ">
                    <label>
                      <input
                        type="checkbox"
                        name="check"
                        value={this.state.check}
                        onChange={this.handleAll1}
                      ></input>
                      Everything I have mentioned is true to the best of my
                      knowledge.
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col className="text-center">
                  <input
                    className="btn btn-dark"
                    type="submit"
                    onClick={this.submit}
                  />
                </Col>
              </Row>
            </form>
          </Container>
        </section>
      </>
    );
  }
}
