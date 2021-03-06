import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import User from "../images/avatar1.png";
import ImageUploader from "react-images-upload";
import Header from "./Header";

export default class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      sex: "",
      matrimony: "",
      mobileno: "",
      dateofjoining: "",
      permanentaddress: "",
      presentaddress: "",
      photo: "",
      firstnameError: "",
      lastnameError: "",
      dobError: "",
      emailError: "",
      sexError: "",
      matrimonyError: "",
      mobilenoError: "",
      dateofjoiningError: "",
      photoError: "",
      permanentaddressError: "",
      presentaddressError: "",
    };

    this.handleAll1 = this.handleAll1.bind(this);
  }

  handleAll1 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  valid() {
    var phoneno = /^\d{10}$/;
    if (this.state.firstname === "") {
      this.setState({ firstnameError: "Firstname is Empty" });
    }
    if (this.state.lastname === "") {
      this.setState({ lastnameError: "Lastname is Empty" });
    }
    if (!this.state.email.includes("@")) {
      this.setState({ emailError: "Email is empty" });
    }
    if (this.state.sex === "") {
      this.setState({ sexError: "please choose your gender" });
    }
    if (this.state.matrimony === "") {
      this.setState({ matrimonyError: "choose your marital status" });
    }
    if (!this.state.mobileno === "") {
      this.setState({ mobilenoError: "Fill your number" });
    }
    if (this.state.dob === "") {
      this.setState({ dobError: "Date is missing" });
    }
    if (this.state.dateofjoining === "") {
      this.setState({ dateofjoiningError: "Date is missing" });
    }
    if (this.state.photo === "") {
      this.setState({ photoError: "Upload Image" });
    }
    if (this.state.permanentaddress === "") {
      this.setState({ permanentaddressError: "Fill Address" });
    }
    if (this.state.presentaddress === "") {
      this.setState({ presentaddressError: "Fill present Address" });
    }
  }

  submit = (e) => {
    e.preventDefault();

    this.valid();
    if (
      this.state.firstname !== "" &&
      this.state.lastname !== "" &&
      this.state.dob !== "" &&
      this.state.email !== "" &&
      this.state.sex !== "" &&
      this.state.matrimony !== "" &&
      this.state.mobileno !== "" &&
      this.state.dateofjoining !== "" &&
      this.state.presentaddress !== "" &&
      this.state.permanentaddress !== "" &&
      this.state.photo !== ""
    ) {
      const obj = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        dob: this.state.dob,
        email: this.state.email,
        sex: this.state.sex,
        matrimony: this.state.matrimony,
        mobileno: this.state.mobileno,
        dateofjoining: this.state.dateofjoining,
        permanentaddress: this.state.permanentaddress,
        presentaddress: this.state.presentaddress,
        photo: this.state.photo,
      };
      this.props.steponetotwo(obj);
    }
  };

  // Base-64 function

  next = (event) => {
    console.log("HHHHhhhhh");
    this.setState({ [event.target.name]: event.target.value });
    try {
      let files = event.target.files; // image will come at this place
      let reader = new FileReader(); // Reader will read the image
      reader.readAsDataURL(files[0]); // now it is converting the image into base-64
      reader.onload = (e) => {
        // when it gets any event on loading, it shows the result, and set it in a state.
        console.log(e.target.result);
        this.setState({ userImage: e.target.result });
      };
    } catch (e) {}
  };

  render() {
    console.log("Ye google kiya", this.state);

    return (
      <>
      <section>
       
      </section>
        <section>
          <Container>
            <h2 className="mt-5">Personal Details</h2>
            <Form>
              <Row className="mt-5">
                <Col className="col-md-6">
                  <div>
                    <p>First Name</p>

                    <input
                      type="text"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.handleAll1}
                      placeholder="Firstname"
                    />
                    <div className="error">{this.state.firstnameError}</div>

                    <p>Last Name</p>
                    <input
                      type="text"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.handleAll1}
                      placeholder="Lastname"
                    />
                    <div classNAme="error">{this.state.lastnameError}</div>

                    <p>Date Of Birth</p>
                    <input
                      type="date"
                      name="dob"
                      value={this.state.dob}
                      onChange={this.handleAll1}
                      size="10"
                    />
                    <div className="error">{this.state.dobError}</div>

                    <p>E-mail Address</p>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleAll1}
                      placeholder="e-mail"
                    />
                    <div className="error">{this.state.emailError}</div>
                  </div>
                </Col>

                <Col className="col-md-3 offset-md-1">
                  <div className="avatar-wrapper offset-md-6">
                    <div className="upload-button">
                      <img
                        src={this.state.userImage ? this.state.userImage : User}
                        alt=""
                      />
                    </div>
                    <input
                      className="file-upload"
                      type="file"
                      value={this.state.photo}
                      name="photo"
                      onChange={this.next}
                      imgextension={[".jpg", ".gif", ".png", ".gif", ".pdf"]}
                    />

                    <div className="error">{this.state.photoError}</div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="col-md-2">
                  <p>Sex</p>
                </Col>
                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="sex"
                        value="male"
                        onChange={(e) => this.setState({ sex: e.target.value })}
                      />
                      Male
                    </label>
                  </div>
                </Col>

                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="sex"
                        value="female"
                        onChange={(e) => this.setState({ sex: e.target.value })}
                      />
                      Female
                    </label>
                  </div>
                </Col>
                <Col md="12">
                  <div className="error">{this.state.sexError}</div>
                </Col>
              </Row>

              <Row>
                <Col className="col-md-2">
                  <p>Matrimony</p>
                </Col>

                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="matrimony"
                        value="married"
                        onChange={() => this.setState({ matrimony: "married" })}
                      ></input>
                      Married
                    </label>
                  </div>
                </Col>

                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="matrimony"
                        value="single"
                        onChange={() => this.setState({ matrimony: "single" })}
                      ></input>
                      Single
                    </label>
                  </div>
                </Col>
                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="matrimony"
                        value="divorced"
                        onChange={() =>
                          this.setState({ matrimony: "divorced" })
                        }
                      ></input>
                      Divorced
                    </label>
                  </div>
                </Col>
                <Col md="12">
                  <div className="error">{this.state.matrimonyError}</div>
                </Col>
              </Row>
              {this.state.matrimony === "married" ? (
                <Row>
                  <Col>
                    <p>Anniversary</p>
                    <input
                      type="date"
                      name="anniversary"
                      value={this.state.anniversary}
                      onChange={this.handleAll1}
                    />
                    <div className="error">{this.state.matrimonyError}</div>
                  </Col>
                </Row>
              ) : null}

              <Row>
                <Col>
                  <p>Mobile No.</p>
                  <input
                    type="number"
                    name="mobileno"
                    value={this.state.mobileno}
                    onChange={this.handleAll1}
                    placeholder="Enter Number"
                  />
                  <div className="error">{this.state.mobilenoError}</div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Date Of Joining</p>
                  <input
                    type="date"
                    name="dateofjoining"
                    value={this.state.dateofjoining}
                    onChange={this.handleAll1}
                  />
                  <div className="error">{this.state.dateofjoiningError}</div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Present Address</p>
                  <textarea
                    name="presentaddress"
                    value={this.state.presentaddress}
                    onChange={this.handleAll1}
                  ></textarea>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Permanent Address</p>
                  <textarea
                    name="permanentaddress"
                    value={this.state.permanentaddress}
                    onChange={this.handleAll1}
                  ></textarea>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col className="text-center">
                  <button
                    className="btn btn-dark"
                    type="submit"
                    onClick={this.submit}
                  >
                    Save & Next
                  </button>
                </Col>
              </Row>
            </Form>
          </Container>
        </section>
      </>
    );
  }
}
