import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Image from "react-bootstrap/Image";

import StepOne from "./StepOne";
import StepThree from "./StepFour";
import StepTwo from "./StepTwo";
import StepFour from "./StepThree";
import Thankyou from "./Thankyou";
import { NavLink, Link } from "react-router-dom";
// import Complete from "./Complete";
import axios from "axios";
import Header from "./Header";

export default class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "stepone",
    };
  }
  ChangeTab = (type) => (e) => {
    console.log(type);
    this.setState({
      type: type,
    });
  };

  step2(e) {
    console.log("final", e);
  }

  steponetotwo = (item) => {
    console.log("Object received", item);

    this.setState({ type: "steptwo", Form1: item });
  };

  steptwoprops = (item) => {
    this.setState({ type: "stepthree", Form2: item });
  };

  stepthreetofour = (item) => {
    this.setState({ type: "stepfour", Form3: item });
  };

  // stepfourtofive = (item) => {
  //   this.setState({ type: "thankyou", Form4: item });
  // };

  // thanktocomp = (item) => {
  //   this.setState({ type: "complete", Form5: item });
  // };

  // finalsubmit = (e) => {
  //   e.preventDefault();
  //   console.log("final form submitted", this.state.Form1);

  //   const data = {
  //     firstname: this.state.Form1.firstname,
  //     lastname: this.state.Form1.lastname,
  //     dob: this.state.Form1.dob,
  //     email: this.state.Form1.email,
  //     sex: this.state.Form1.sex,
  //     matrimony: "",
  //     mobileno: "",
  //     dateofjoining: "",
  //     permanentaddress: "",
  //     presentaddress: "",
  //     photo: this.state.Form1.photo,
  //     highschool: "",
  //     highersecondry: "",
  //     graduation: "",
  //     postgraduation: "",
  //     bankname: "",
  //     ifsc: "",
  //     bankaccountno: "",
  //     emergencyname: "",
  //     relation: "",
  //     emergencycontact: "",
  //     emergencyaddress: "",
  //   };

  //   console.log("Data", data);
  //   try {
  //     axios
  //       .post("http://203.190.153.22:4010/employee-form/submit", data)
  //       //   // url: "http://203.190.153.22:3002/employee-form/submit",
  //       //   headers: {
  //       //     "Content-type": "application/json",
  //       //   },
  //       //   // body: JSON.stringify(data),
  //       //   data: data,
  //       // })
  //       .then((result) => {
  //         console.log(result);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   this.props.history.push("/thankyou");
  // };

  render() {
    return (
      <>
        <Header />
        <div className="stepNavbar">
          <Container>
            <div>
              <div className="Bar ">
                <ul>
                  <li>
                    <NavLink
                      to="#"
                      onClick={this.ChangeTab("stepone")}
                      activeClassName={
                        this.state.type === "stepone" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-user-o"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={this.ChangeTab("steptwo")}
                      activeClassName={
                        this.state.type === "steptwo" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-graduation-cap"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      // onClick={this.ChangeTab("stepthree")}
                      activeClassName={
                        this.state.type === "stepthree" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-lock"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      activeClassName={
                        this.state.type === "stepfour" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-address-book"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      activeClassName={
                        this.state.type === "thankyou" ? "stepactive" : ""
                      }
                    >
                      <i class="fa fa-check"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        <div className="loginBox">
          <form>
            {this.state.type === "stepone" ? (
              <StepOne steponetotwo={this.steponetotwo} />
            ) : (
              ""
            )}
            {this.state.type === "steptwo" ? (
              <StepTwo
                formValue={this.state.Form1}
                steptwoprops={this.steptwoprops}
              />
            ) : (
              ""
            )}
            {this.state.type === "stepthree" ? (
              <StepFour
                formValue={this.state.Form2}
                stepthreetofour={this.stepthreetofour}
              />
            ) : (
              ""
            )}
            {this.state.type === "stepfour" ? (
              <StepThree
                finalsubmit={this.finalsubmit}
                formValue={this.state.Form3}
                // onClick={<Link to="/thankyou" />}
              />
            ) : (
              ""
            )}
          </form>
        </div>
      </>
    );
  }
}
