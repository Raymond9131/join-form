import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import User from "../images/avatar1.png";
import axios from "axios";

export default class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      dob: "",
      email: "",
      gender: "",
      matrimony: "",
      mobile: "",
      doj: "",
      presentaddress: "",
      permanentaddress: "",
      fnameError: "",
      lnameError: "",
      dobError: "",
      emailError: "",
      genderError: "",
      matrimonyError: "",
      mobileError: "",
      dojError: "",
      presentaddressError: "",
      permanentaddressError: "",
    };

    this.handleAll1 = this.handleAll1.bind(this);
  }

  handleAll1 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  valid() {
    var phoneno = /^\d{10}$/;
    if (this.state.fname === "") {
      this.setState({ fnameError: "Firstname is Empty" });
    }
    if (this.state.lname === "") {
      this.setState({ lnameError: "Lastname is Empty" });
    }
    if (!this.state.email.includes("@")) {
      this.setState({ emailError: "Email is empty" });
    }
    if (this.state.gender === "") {
      this.setState({ genderError: "please choose your gender" });
    }
    if (this.state.matrimony === "") {
      this.setState({ matrimonyError: "choose your marital status" });
    }
    if (!this.state.mobile === "") {
      this.setState({ mobileError: "Fill your number" });
    }
    if (this.state.dob === "") {
      this.setState({ dobError: "Date is missing" });
    }
    if (this.state.doj === "") {
      this.setState({ dojError: "Date is missing" });
    }

    if (this.state.permanentaddress === "") {
      this.setState({ permanentaddressError: "Fill Address" });
    }
    if (this.state.presentaddress === "") {
      this.setState({ presentaddressError: "Fill present Address" });
    }
  }

  componentDidMount = () => {
    let id = localStorage.getItem("userId");
    console.log(id);
    if (id !== "") {
      axios
        .get("http://203.190.153.22:3002/api/get-user/"+id)
        .then((data) => {
          console.log(data);
          this.setState(
            {
              fname: data.fname,
              lname: data.lname,
              dob: data.dob,
              email: data.email,
              gender: data.gender,
              matrimony: data.matrimony,
              mobile: data.mobile,
              doj: data.doj,
              presentaddress: data.presentaddress,
              permanentaddress: data.permanentaddress,
            },
            () => {
              console.log(this.state.fname);
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  submit = (e) => {
    e.preventDefault();
    let id = localStorage.getItem("userId");
    // console.log(id);

    this.valid();
    if (
      this.state.fname !== "" &&
      this.state.lname !== "" &&
      this.state.dob !== "" &&
      this.state.email !== "" &&
      this.state.gender !== "" &&
      this.state.matrimony !== "" &&
      this.state.mobile !== "" &&
      this.state.doj !== "" &&
      this.state.presentaddress !== "" &&
      this.state.permanentaddress !== ""
    ) {
      try {
        let data = {
          firstname: this.state.fname,
          lastname: this.state.lname,
          dob: this.state.dob,
          email: this.state.email,
          gender: this.state.gender,
          matrimony: this.state.matrimony,
          mobile: this.state.mobile,
          dateofjoining: this.state.doj,
          presentaddress: this.state.presentaddress,
          permanentaddress: this.state.permanentaddress,
        };
        console.log("pahla data", data);
        axios({
          method: "put",
          url: "http://203.190.153.22:3002/api/update/empdetails/" + id,
          data: data,
        }).then((result) => {
          console.log("result", result);
        });
      } catch (error) {
        console.log(error);
      }
      this.props.steponetotwo();
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
    return (
      <>
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
                      name="fname"
                      value={this.state.fname}
                      onChange={this.handleAll1}
                      placeholder="Firstname"
                    />
                    <div className="error">{this.state.fnameError}</div>

                    <p>Last Name</p>
                    <input
                      type="text"
                      name="lname"
                      value={this.state.lname}
                      onChange={this.handleAll1}
                      placeholder="Lastname"
                    />
                    <div classNAme="error">{this.state.lnameError}</div>

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
                  <p>Gender</p>
                </Col>
                <Col className="col-md-3">
                  <div className="checklsbel">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={(e) =>
                          this.setState({ gender: e.target.value })
                        }
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
                        name="gender"
                        value="female"
                        onChange={(e) =>
                          this.setState({ gender: e.target.value })
                        }
                      />
                      Female
                    </label>
                  </div>
                </Col>
                <Col md="12">
                  <div className="error">{this.state.genderError}</div>
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
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.handleAll1}
                    placeholder="Enter Number"
                  />
                  <div className="error">{this.state.mobileError}</div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Date Of Joining</p>
                  <input
                    type="date"
                    name="doj"
                    value={this.state.doj}
                    onChange={this.handleAll1}
                  />
                  <div className="error">{this.state.dojError}</div>
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
                  <div className="error">{this.state.presentaddressError}</div>
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
                  <div className="error">
                    {this.state.permanentaddressError}
                  </div>
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
