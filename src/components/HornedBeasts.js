import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbOfFav: 0,
    };
  }

  increseNumOfFav = () => {
    this.setState({
      numbOfFav: this.state.numbOfFav + 1,
    });

    this.props.handleshow();
    this.props.updateData(
      this.props.title,
      this.props.imageUrl,
      this.props.description
    );
  };

  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              onClick={this.increseNumOfFav}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>❤️ : {this.state.numbOfFav}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeasts;
