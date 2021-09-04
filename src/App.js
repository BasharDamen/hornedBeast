import React from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import hornsData from "./components/hornsData.json";
import SelectedBeast from "./components/SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      imageUrl: "",
      description: "",
      hornsData: hornsData,
    };
  }

  handleshow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  updateData = (title, imageUrl, description) => {
    this.setState({
      title: title,
      imageUrl: imageUrl,
      description: description,
    });
  };

  handleSelect = (event) => {
    let filteredData;

    if (event.target.value === "all") {
      filteredData = hornsData;
    } else {
      filteredData = hornsData.filter((item) => {
        return item.horns === parseInt(event.target.value);
      });
    }

    this.setState({
      hornsData: filteredData,
    });
  };
  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select
              onChange={this.handleSelect}
              aria-label="Default select example"
              controlId="horns"
              placeholder="Select"
            >
              <option value="all">all</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          hornsData={this.state.hornsData}
          handleshow={this.handleshow}
          updateData={this.updateData}
        />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          imageUrl={this.state.imageUrl}
          description={this.state.description}
        />
        <Footer />
      </>
    );
  }
}

export default App;
