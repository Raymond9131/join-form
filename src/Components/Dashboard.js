import React, { Component } from "react";
import Header from "./Header";
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-dashboard">
          <Container sm>
            <Row>
              <Col md={2}>
                <div className="sidebar">
                  <ul>
                    <li>
                      <Link to="#">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="#">Profile</Link>
                    </li>
                    <li>
                      <Link to="#">Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Attendance</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={10}>
                <div className="content">
                  <Card>
                    <Card.Body>
                      <Card.Title>DashBoard</Card.Title>
                      <div className="">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email ID</th>
                              <th>Mobile No.</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                              <td>@mdo</td>
                              <td>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    className="btn-danger"
                                    variant="success"
                                    id="dropdown-basic"
                                  >
                                    Select Status
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                      Draft
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Pending HR
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Complete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </td>
                              <td>
                                <Link to="/">
                                  <VisibilityIcon
                                    fontSize="large"
                                    color="secondary"
                                  />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
