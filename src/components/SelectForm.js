import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class FormClass extends React.Component {
  render() {
    return (
      <>
        <Form.Select onChange="" aria-label="Default select example">
          <option>show by horns number</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">100</option>
        </Form.Select>
      </>
    );
  }
}

export default FormClass;
