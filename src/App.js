import React from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import hornsData from "./components/hornsData.json";
import SelectedBeast from "./components/SelectedBeast";
import Form from "./components/SelectForm";

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

  filteredData = () => {
    this.setState({
      hornsData: (this.state.hornsData.filter = (item) => {
        if (item.horns === 1) {
          return item;
        }
      }),
    });
  };

  render() {
    return (
      <>
        <Header />
        <Form />
        <Main
          hornsData={hornsData}
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
