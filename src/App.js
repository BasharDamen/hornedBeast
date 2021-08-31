import React from 'react';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/Footer';
import hornsData from "./components/hornsData.json";
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      beastItem: {},
      show: false
    };
  }


  showModal = (title) => {
    let elements = hornsData.find(element => {

      if (element.title === title) {
        return element;
      }
    });


    this.setState({
      show: true,
      beastItem: elements
    })
  };

  // =============================================================

  handleClose = () => {
    this.setState({
      beastItem: {},
      show: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main showModal={this.showModal} />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} beastItem={this.state.beastItem} />
        <Footer />
      </>
    );

  };

}


export default App;