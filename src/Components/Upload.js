import React, { Component } from "react";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="file"
              onChange={this.handleInputChange}
              ref={(input) => (this.fileInput = input)}
              className="form-control"
            />
          </label>
          <br />
          {this.state.fileName && (
            <h4 className="mt-3">
              File: <span className="text-danger">{this.state.fileName}</span>
            </h4>
          )}
        </form>
      </>
    );
  }
}
