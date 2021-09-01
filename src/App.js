import React from 'react';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/Footer';
import hornsData from "./components/hornsData.json";
import SelectedBeast from './components/SelectedBeast';
// import { element } from 'prop-types';

class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      elementToShow: {},
      show: false
    }
  }

  handleModal = (title)=>{
    let selectedElement = hornsData.filter=(item =>{
      if (item.title === title) {
        return item;
      }
    })

    this.setState({
      elementToShow: selectedElement,
      show: true
    })
  }


  render() {
    return (
      <>
        <Header />
        <Main showModal={this.handleModal} />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} elementToShow={this.state.elementToShow} />
        <Footer />
      </>
    );

  };

}


export default App;