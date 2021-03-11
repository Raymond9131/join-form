import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highschool: "",
      highersecondry: "",
      graduation: "",
      postgraduation: "",

      d: [],
    };
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState({
      files: files,
      open: false,
    });
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  componentDidMount = () => {
    console.log("name", this.props);
  };

  mouse = (e) => {
    e.preventDefault();
    this.state.Text.map((r, index) => {
      if (r.Name.replace(" ", "") === "") {
        this.setState({ d: this.state.d.concat(true) });
      } else {
        this.setState({ d: this.state.d.concat(false) });
      }
    });
    if (this.state.d.includes(false)) {
      this.setState({ validation: true });
      this.props.steptwoprops(this.state);
    } else {
      this.setState({ validation: false });
    }
  };

  next = (Name) => (event) => {
    console.log("HHHHhhhhh");
    this.setState({ [event.target.name]: [event.target.value] });
    try {
      let files = event.target.files;
      console.warn("data file", files);
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        this.setState({ [Name]: e.target.result });
      };
    } catch (e) {}
  };

  render() {
    console.log(this.state);
    return (
      <>
        <section className="space">
          <Container>
            <h2 className="mt-5">Educational Details</h2>

            <Row className="mt-4">
              <Col>
                <p>Highschool</p>
                <input
                  type="file"
                  onChange={this.handleInputChange}
                  ref={(input) => (this.fileInput = input)}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <p>Highersecondry</p>
                <input
                  type="file"
                  onChange={this.handleInputChange}
                  ref={(input) => (this.fileInput = input)}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <p>Graduation</p>
                <input
                  type="file"
                  onChange={this.handleInputChange}
                  ref={(input) => (this.fileInput = input)}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <p>Postgraduation</p>
                <input
                  type="file"
                  onChange={this.handleInputChange}
                  ref={(input) => (this.fileInput = input)}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md="12" className="text-center">
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    this.props.steptwoprops({
                      step2Data: this.state,
                      step1Data: this.props.formValue,
                    })
                  }
                >
                  Save & Next
                </button>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
