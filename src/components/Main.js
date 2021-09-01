// import NavItem from '@restart/ui/esm/NavItem';
import React from "react";
import HornedBeasts from "./HornedBeasts";
import Row from "react-bootstrap/Row";

// import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {this.props.hornsData.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                handleshow={this.props.handleshow}
                updateData={this.props.updateData}
              />
            );
          })}
        </Row>
      </>
    );
  }
}

export default Main;
