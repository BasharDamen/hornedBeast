import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            favorite : 0
        }
    }

    increaseFavNum = () => {
        this.setState({
            favorite: this.state.favorite + 1
        })
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.title} title={this.props.title} onClick={this.increaseFavNum} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="primary">💙 : {this.state.favorite}</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }

}

export default HornedBeasts