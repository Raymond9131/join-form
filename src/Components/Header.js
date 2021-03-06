import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import digi from "../images/digimonk.jpeg";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="top-header mb-5">
          <Container className="half-div ">
            <Row className="align-items-center">
              <Col md="3">
                <img
                  src={digi}
                  width="200"
                  height="100"
                  className="d-inline-block align-top"
                  alt="Digimonk"
                />
              </Col>
              <Col md="9">
                <h1 className="colours">Employee Joining Form</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
