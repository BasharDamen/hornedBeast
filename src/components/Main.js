// import NavItem from '@restart/ui/esm/NavItem';
import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornsData from './hornsData.json';
import Row from 'react-bootstrap/Row';
import { element } from 'prop-types';

// import './Main.css'

class Main extends React.Component {

    
    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">
                    {
                        hornsData.map(item => {
                            return (
                                <HornedBeasts
                                    title={item.title}
                                    imageUrl={item.image_url}
                                    description={item.description}
                                    showCard={this.props.showModal}
                                />
                            )
                        })
                    }
                </Row>
            </>
        );
    };

};

export default Main;